import { useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import {
  Settings as SettingsIcon,
  Database,
  Bell,
  Shield,
  Save,
  RefreshCw,
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function Settings() {
  const [settings, setSettings] = useState({
    siteName: "JB Industries",
    siteDescription: "Industrial Fastening Solutions",
    adminEmail: "admin@jbindustries.com",
    notificationsEnabled: true,
    autoBackup: true,
    maintenanceMode: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSave = async () => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: "Success",
        description: "Settings saved successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save settings",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearCache = async () => {
    setIsLoading(true);
    try {
      // Clear localStorage
      localStorage.removeItem("admin-products");
      localStorage.removeItem("admin-users");

      await new Promise((resolve) => setTimeout(resolve, 500));

      toast({
        title: "Success",
        description: "Cache cleared successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to clear cache",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-muted-foreground">
            Manage your application settings and preferences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* General Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <SettingsIcon className="mr-2 h-5 w-5" />
                General Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="siteName">Site Name</Label>
                <Input
                  id="siteName"
                  value={settings.siteName}
                  onChange={(e) =>
                    setSettings({ ...settings, siteName: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="siteDescription">Site Description</Label>
                <Input
                  id="siteDescription"
                  value={settings.siteDescription}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      siteDescription: e.target.value,
                    })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="adminEmail">Admin Email</Label>
                <Input
                  id="adminEmail"
                  type="email"
                  value={settings.adminEmail}
                  onChange={(e) =>
                    setSettings({ ...settings, adminEmail: e.target.value })
                  }
                />
              </div>
            </CardContent>
          </Card>

          {/* System Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="mr-2 h-5 w-5" />
                System Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="notifications">Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Enable email notifications
                  </p>
                </div>
                <Switch
                  id="notifications"
                  checked={settings.notificationsEnabled}
                  onCheckedChange={(checked) =>
                    setSettings({ ...settings, notificationsEnabled: checked })
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="autoBackup">Auto Backup</Label>
                  <p className="text-sm text-muted-foreground">
                    Automatically backup data daily
                  </p>
                </div>
                <Switch
                  id="autoBackup"
                  checked={settings.autoBackup}
                  onCheckedChange={(checked) =>
                    setSettings({ ...settings, autoBackup: checked })
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="maintenance">Maintenance Mode</Label>
                  <p className="text-sm text-muted-foreground">
                    Put site in maintenance mode
                  </p>
                </div>
                <Switch
                  id="maintenance"
                  checked={settings.maintenanceMode}
                  onCheckedChange={(checked) =>
                    setSettings({ ...settings, maintenanceMode: checked })
                  }
                />
              </div>
            </CardContent>
          </Card>

          {/* Database Status */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Database className="mr-2 h-5 w-5" />
                Database Status
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span>MongoDB Connection</span>
                <Badge variant="secondary">Fallback Mode</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Storage Type</span>
                <Badge variant="outline">LocalStorage</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Auto Sync</span>
                <Badge variant="default">Enabled</Badge>
              </div>
              <Button
                onClick={handleClearCache}
                variant="outline"
                disabled={isLoading}
                className="w-full"
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Clear Cache
              </Button>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="mr-2 h-5 w-5" />
                Notification Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">New product alerts</span>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">User registration</span>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">System updates</span>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Backup completion</span>
                  <Switch defaultChecked />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button onClick={handleSave} disabled={isLoading}>
            <Save className="mr-2 h-4 w-4" />
            {isLoading ? "Saving..." : "Save Settings"}
          </Button>
        </div>
      </div>
    </AdminLayout>
  );
}
