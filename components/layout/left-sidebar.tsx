"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { sidebarItems, user } from "@/constants/layout";
import { useAuthStore } from "@/stores/auth";

import { Spinner } from "../ui/spinner";

export default function LeftSidebar() {
  const { loading, logout } = useAuthStore();

  return (
    <SidebarContent className="mt-8 flex h-full flex-col md:mt-24">
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu className="space-y-2">
            {sidebarItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  tooltip={item.label}
                  className="flex items-center gap-3 pl-5"
                >
                  <Link href={item.href}>
                    <item.icon className="h-4! w-4! shrink-0" />
                    <span className="text-sm">{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <div className="flex-1" />
      <SidebarFooter className="mb-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex h-auto w-full items-center justify-start gap-2 p-2"
            >
              <Image
                src={user.profile}
                alt="Profile"
                width={36}
                height={36}
                className="rounded-full"
              />
              <div className="min-w-0 text-left">
                <p className="truncate text-sm font-medium">{user.name}</p>
                <p className="text-muted-foreground truncate text-xs">
                  {user.username}
                </p>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" side="top" align="start">
            <DropdownMenuItem onClick={logout} className="text-red-500">
              {loading ? (
                <Spinner className="h-5 w-5 animate-spin" />
              ) : (
                "Logout"
              )}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
    </SidebarContent>
  );
}
