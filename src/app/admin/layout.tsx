"use client";

import BreadCrumb from "@/components/admin/dashboard/breadcrumb.component";
import NavBar from "@/components/admin/dashboard/navbar.component";
import Sidebar from "@/components/admin/dashboard/sidebar.component";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Sidebar />

      <div className="p-4 sm:ml-64">
        <NavBar />
        <BreadCrumb />
        {children}
      </div>
    </main>
  );
}
