import { useState, useEffect } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Search,
  MoreHorizontal,
  Mail,
  Phone,
  Calendar,
  Users as UsersIcon,
  UserCheck,
  UserX,
} from "lucide-react";

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: "customer" | "admin" | "manager";
  status: "active" | "inactive" | "blocked";
  avatar?: string;
  joinedAt: string;
  lastLogin: string;
}

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  useEffect(() => {
    // Initialize with sample users data
    const sampleUsers: User[] = [
      {
        id: "1",
        name: "Rajesh Kumar",
        email: "rajesh@example.com",
        phone: "+91 98765 43210",
        role: "customer",
        status: "active",
        joinedAt: "2024-01-15",
        lastLogin: "2024-12-20",
      },
      {
        id: "2",
        name: "Priya Sharma",
        email: "priya@example.com",
        phone: "+91 87654 32109",
        role: "customer",
        status: "active",
        joinedAt: "2024-02-20",
        lastLogin: "2024-12-19",
      },
      {
        id: "3",
        name: "Admin User",
        email: "admin@example.com",
        phone: "+91 76543 21098",
        role: "admin",
        status: "active",
        joinedAt: "2023-12-01",
        lastLogin: "2024-12-21",
      },
      {
        id: "4",
        name: "Vikash Patel",
        email: "vikash@example.com",
        phone: "+91 65432 10987",
        role: "customer",
        status: "inactive",
        joinedAt: "2024-03-10",
        lastLogin: "2024-11-15",
      },
      {
        id: "5",
        name: "Manager Singh",
        email: "manager@example.com",
        phone: "+91 54321 09876",
        role: "manager",
        status: "active",
        joinedAt: "2024-01-05",
        lastLogin: "2024-12-20",
      },
    ];

    const savedUsers = localStorage.getItem("admin-users");
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    } else {
      setUsers(sampleUsers);
      localStorage.setItem("admin-users", JSON.stringify(sampleUsers));
    }
  }, []);

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.phone.includes(searchTerm);
    const matchesRole = !selectedRole || user.role === selectedRole;
    const matchesStatus = !selectedStatus || user.status === selectedStatus;
    return matchesSearch && matchesRole && matchesStatus;
  });

  const updateUserStatus = (userId: string, newStatus: User["status"]) => {
    const updatedUsers = users.map((user) =>
      user.id === userId ? { ...user, status: newStatus } : user,
    );
    setUsers(updatedUsers);
    localStorage.setItem("admin-users", JSON.stringify(updatedUsers));
  };

  const deleteUser = (userId: string) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
    localStorage.setItem("admin-users", JSON.stringify(updatedUsers));
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-IN");
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case "admin":
        return "bg-red-100 text-red-800";
      case "manager":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "inactive":
        return "bg-yellow-100 text-yellow-800";
      case "blocked":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const stats = {
    total: users.length,
    active: users.filter((u) => u.status === "active").length,
    inactive: users.filter((u) => u.status === "inactive").length,
    blocked: users.filter((u) => u.status === "blocked").length,
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold">Users Management</h1>
          <p className="text-muted-foreground">
            Manage and monitor user accounts
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <UsersIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.total}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Users
              </CardTitle>
              <UserCheck className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {stats.active}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Inactive Users
              </CardTitle>
              <UserX className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">
                {stats.inactive}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Blocked Users
              </CardTitle>
              <UserX className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">
                {stats.blocked}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card>
          <CardHeader>
            <CardTitle>Users ({filteredUsers.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search users..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <select
                className="px-3 py-2 border border-input bg-background rounded-md text-sm"
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
              >
                <option value="">All Roles</option>
                <option value="customer">Customer</option>
                <option value="manager">Manager</option>
                <option value="admin">Admin</option>
              </select>
              <select
                className="px-3 py-2 border border-input bg-background rounded-md text-sm"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                <option value="">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="blocked">Blocked</option>
              </select>
            </div>

            {/* Users Table */}
            <div className="border rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Joined</TableHead>
                    <TableHead>Last Login</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredUsers.length === 0 ? (
                    <TableRow>
                      <TableCell
                        colSpan={7}
                        className="text-center py-8 text-muted-foreground"
                      >
                        No users found
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>
                          <div className="flex items-center space-x-3">
                            <Avatar>
                              <AvatarImage src={user.avatar} />
                              <AvatarFallback>
                                {getInitials(user.name)}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{user.name}</div>
                              <div className="text-sm text-muted-foreground">
                                ID: {user.id}
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="flex items-center text-sm">
                              <Mail className="mr-1 h-3 w-3" />
                              {user.email}
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Phone className="mr-1 h-3 w-3" />
                              {user.phone}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={getRoleBadgeColor(user.role)}>
                            {user.role.charAt(0).toUpperCase() +
                              user.role.slice(1)}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusBadgeColor(user.status)}>
                            {user.status.charAt(0).toUpperCase() +
                              user.status.slice(1)}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center text-sm">
                            <Calendar className="mr-1 h-3 w-3" />
                            {formatDate(user.joinedAt)}
                          </div>
                        </TableCell>
                        <TableCell>{formatDate(user.lastLogin)}</TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              {user.status !== "active" && (
                                <DropdownMenuItem
                                  onClick={() =>
                                    updateUserStatus(user.id, "active")
                                  }
                                >
                                  Activate User
                                </DropdownMenuItem>
                              )}
                              {user.status !== "blocked" && (
                                <DropdownMenuItem
                                  onClick={() =>
                                    updateUserStatus(user.id, "blocked")
                                  }
                                >
                                  Block User
                                </DropdownMenuItem>
                              )}
                              {user.status !== "inactive" && (
                                <DropdownMenuItem
                                  onClick={() =>
                                    updateUserStatus(user.id, "inactive")
                                  }
                                >
                                  Deactivate User
                                </DropdownMenuItem>
                              )}
                              <AlertDialog>
                                <AlertDialogTrigger asChild>
                                  <DropdownMenuItem
                                    onSelect={(e) => e.preventDefault()}
                                    className="text-red-600"
                                  >
                                    Delete User
                                  </DropdownMenuItem>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                  <AlertDialogHeader>
                                    <AlertDialogTitle>
                                      Delete User
                                    </AlertDialogTitle>
                                    <AlertDialogDescription>
                                      Are you sure you want to delete "
                                      {user.name}"? This action cannot be
                                      undone.
                                    </AlertDialogDescription>
                                  </AlertDialogHeader>
                                  <AlertDialogFooter>
                                    <AlertDialogCancel>
                                      Cancel
                                    </AlertDialogCancel>
                                    <AlertDialogAction
                                      onClick={() => deleteUser(user.id)}
                                      className="bg-red-600 hover:bg-red-700"
                                    >
                                      Delete
                                    </AlertDialogAction>
                                  </AlertDialogFooter>
                                </AlertDialogContent>
                              </AlertDialog>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
