import { Suspense } from "react";
import { Sidebar } from "@/components/Sidebar";
import { BentoGrid } from "@/components/BentoGrid";
import { HeroTile } from "@/components/HeroTile";
import { CourseTile } from "@/components/CourseTile";
import { ActivityTile } from "@/components/ActivityTile";
import { createClient } from "@/utils/supabase/server";
import { BookOpen, BarChart2, Settings, Bell, Lock, User, Monitor } from "lucide-react";

export const dynamic = "force-dynamic";

async function DashboardView() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return (
      <>
        <HeroTile />
        <ActivityTile />
        <div className="col-span-1 md:col-span-3 rounded-3xl bg-card border border-border/50 p-8 text-center flex flex-col items-center justify-center">
          <h2 className="text-xl font-bold mb-2">Supabase Configuration Missing</h2>
          <p className="text-gray-400 mb-4">Please add your Supabase URL and Anon Key to the <code>.env.local</code> file.</p>
        </div>
      </>
    );
  }

  const supabase = await createClient();

  const { data: courses, error } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return (
    <>
      <HeroTile />
      <ActivityTile />
      {courses?.map((course) => (
        <CourseTile
          key={course.id}
          title={course.title}
          progress={course.progress}
          iconName={course.icon_name}
        />
      ))}
    </>
  );
}

async function CoursesView() {
  const supabase = await createClient();
  const { data: courses } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <>
      <div className="col-span-1 md:col-span-3 mb-4 flex items-center gap-4">
        <div className="h-12 w-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center">
          <BookOpen className="text-indigo-400" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Course Library</h2>
          <p className="text-gray-400">Browse and manage your enrolled courses directly from your database.</p>
        </div>
      </div>
      {courses?.map((course) => (
        <CourseTile
          key={course.id}
          title={course.title}
          progress={course.progress}
          iconName={course.icon_name}
        />
      ))}
    </>
  );
}

function AnalyticsView() {
  return (
    <div className="col-span-1 md:col-span-3 space-y-6">
      <div className="flex items-center gap-4 mb-6">
        <div className="h-12 w-12 rounded-2xl bg-purple-500/10 flex items-center justify-center">
          <BarChart2 className="text-purple-400" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Learning Analytics</h2>
          <p className="text-gray-400">Detailed insights into your learning progress.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card border border-border/50 p-6 rounded-3xl flex flex-col justify-between min-h-[160px]">
          <p className="text-gray-400 font-medium">Total Hours</p>
          <p className="text-4xl font-bold text-white">128.5<span className="text-lg text-gray-500 ml-1">hrs</span></p>
          <p className="text-sm text-green-400">+12% from last week</p>
        </div>
        <div className="bg-card border border-border/50 p-6 rounded-3xl flex flex-col justify-between min-h-[160px]">
          <p className="text-gray-400 font-medium">Completion Rate</p>
          <p className="text-4xl font-bold text-white">64<span className="text-lg text-gray-500 ml-1">%</span></p>
          <p className="text-sm text-green-400">+5% from last week</p>
        </div>
        <div className="bg-card border border-border/50 p-6 rounded-3xl flex flex-col justify-between min-h-[160px]">
          <p className="text-gray-400 font-medium">Current Rank</p>
          <p className="text-4xl font-bold text-white">Gold <span className="text-lg text-yellow-500 ml-1">III</span></p>
          <p className="text-sm text-yellow-500">Top 15% of learners</p>
        </div>
      </div>

      <div className="bg-card border border-border/50 p-8 rounded-3xl min-h-[300px] flex flex-col">
        <h3 className="font-semibold mb-6">Weekly Activity Distribution</h3>
        <div className="flex-1 flex items-end justify-between gap-2 md:gap-8 pt-4">
          {[40, 70, 45, 90, 30, 60, 85].map((height, i) => (
            <div key={i} className="w-full flex flex-col items-center gap-3">
              <div className="w-full bg-primary/20 rounded-t-lg relative" style={{ height: '200px' }}>
                <div
                  className="absolute bottom-0 w-full bg-gradient-to-t from-primary to-purple-400 rounded-t-lg transition-all duration-1000"
                  style={{ height: `${height}%` }}
                />
              </div>
              <span className="text-xs text-gray-500 font-medium">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SettingsView() {
  const settingGroups = [
    {
      title: "Account Preferences",
      items: [
        { icon: User, label: "Profile Information", desc: "Update your name and email" },
        { icon: Lock, label: "Password & Security", desc: "Manage your password and 2FA" },
      ]
    },
    {
      title: "App Settings",
      items: [
        { icon: Bell, label: "Notifications", desc: "Choose what alerts you receive" },
        { icon: Monitor, label: "Appearance", desc: "Toggle dark/light mode and themes" },
      ]
    }
  ];

  return (
    <div className="col-span-1 md:col-span-3 max-w-3xl mx-auto w-full">
      <div className="flex items-center gap-4 mb-8">
        <div className="h-12 w-12 rounded-2xl bg-gray-500/10 flex items-center justify-center">
          <Settings className="text-gray-400" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Settings</h2>
          <p className="text-gray-400">Manage your account and preferences.</p>
        </div>
      </div>

      <div className="space-y-8">
        {settingGroups.map((group, i) => (
          <div key={i} className="bg-card border border-border/50 rounded-3xl overflow-hidden">
            <div className="px-6 py-4 border-b border-border/50 bg-white/[0.02]">
              <h3 className="font-semibold">{group.title}</h3>
            </div>
            <div className="divide-y divide-border/50">
              {group.items.map((item, j) => (
                <div key={j} className="p-6 flex items-center justify-between hover:bg-white/[0.01] transition-colors cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-white">{item.label}</p>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                  <div className="text-gray-600">→</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default async function Dashboard(props: { searchParams: Promise<{ tab?: string }> }) {
  const searchParams = await props.searchParams;
  const tab = searchParams.tab || "dashboard";

  return (
    <>
      <Sidebar />
      <BentoGrid>
        {tab === "dashboard" && (
          <Suspense fallback={<div className="col-span-1 md:col-span-3 text-center p-12 text-gray-400">Loading Dashboard...</div>}>
            <DashboardView />
          </Suspense>
        )}

        {tab === "courses" && <CoursesView />}
        {tab === "analytics" && <AnalyticsView />}
        {tab === "settings" && <SettingsView />}
      </BentoGrid>
    </>
  );
}
