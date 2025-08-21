import { useState, useEffect } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Product } from "@shared/types";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";
import { TrendingUp, Package, DollarSign, ShoppingCart } from "lucide-react";

interface CategoryData {
  name: string;
  count: number;
  value: number;
}

interface MonthlyData {
  month: string;
  products: number;
  revenue: number;
}

export default function Analytics() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categoryData, setCategoryData] = useState<CategoryData[]>([]);
  const [monthlyData, setMonthlyData] = useState<MonthlyData[]>([]);

  useEffect(() => {
    // Load products from localStorage
    const savedProducts = localStorage.getItem("admin-products");
    if (savedProducts) {
      const productList: Product[] = JSON.parse(savedProducts);
      setProducts(productList);

      // Process category data
      const categoryMap = new Map<string, { count: number; value: number }>();
      productList.forEach((product) => {
        const existing = categoryMap.get(product.category) || {
          count: 0,
          value: 0,
        };
        categoryMap.set(product.category, {
          count: existing.count + 1,
          value: existing.value + product.price,
        });
      });

      const categories = Array.from(categoryMap.entries()).map(
        ([name, data]) => ({
          name,
          count: data.count,
          value: data.value,
        }),
      );
      setCategoryData(categories);

      // Generate sample monthly data (last 6 months)
      const months = ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const monthly = months.map((month, index) => ({
        month,
        products: Math.floor(Math.random() * 10) + 5,
        revenue: Math.floor(Math.random() * 50000) + 20000,
      }));
      setMonthlyData(monthly);
    }
  }, []);

  const totalRevenue = products.reduce(
    (sum, p) => sum + (p.inStock ? p.price : 0),
    0,
  );
  const avgPrice = products.length > 0 ? totalRevenue / products.length : 0;
  const inStockProducts = products.filter((p) => p.inStock).length;
  const outOfStockProducts = products.length - inStockProducts;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#8884D8",
    "#82CA9D",
  ];

  const pieData = [
    { name: "In Stock", value: inStockProducts },
    { name: "Out of Stock", value: outOfStockProducts },
  ];

  const topProducts = products.sort((a, b) => b.price - a.price).slice(0, 5);

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold">Analytics</h1>
          <p className="text-muted-foreground">
            Detailed insights into your business performance
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Products
              </CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{products.length}</div>
              <p className="text-xs text-muted-foreground">
                +2 from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Revenue
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatPrice(totalRevenue)}
              </div>
              <p className="text-xs text-muted-foreground">
                +12% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Average Price
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatPrice(avgPrice)}</div>
              <p className="text-xs text-muted-foreground">
                +5% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                In Stock Rate
              </CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {products.length > 0
                  ? Math.round((inStockProducts / products.length) * 100)
                  : 0}
                %
              </div>
              <p className="text-xs text-muted-foreground">
                +3% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Category Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Products by Category</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={categoryData}
                  width={500}
                  height={300}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis
                    dataKey="name"
                    tick={{ fontSize: 12 }}
                    tickLine={true}
                    axisLine={true}
                    interval={0}
                  />
                  <YAxis
                    tick={{ fontSize: 12 }}
                    tickLine={true}
                    axisLine={true}
                    width={50}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#fff",
                      border: "1px solid #ccc",
                    }}
                  />
                  <Bar dataKey="count" fill="#8884d8" animationDuration={800} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Stock Status */}
          <Card>
            <CardHeader>
              <CardTitle>Stock Status</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart width={400} height={300}>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    animationBegin={0}
                    animationDuration={800}
                  >
                    {pieData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#fff",
                      border: "1px solid #ccc",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Charts Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Monthly Trends */}
          <Card>
            <CardHeader>
              <CardTitle>Monthly Revenue Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart
                  data={monthlyData}
                  width={500}
                  height={300}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis
                    dataKey="month"
                    tick={{ fontSize: 12 }}
                    tickLine={true}
                    axisLine={true}
                    interval={0}
                  />
                  <YAxis
                    tick={{ fontSize: 12 }}
                    tickLine={true}
                    axisLine={true}
                    width={80}
                  />
                  <Tooltip
                    formatter={(value) => [
                      formatPrice(Number(value)),
                      "Revenue",
                    ]}
                    contentStyle={{
                      backgroundColor: "#fff",
                      border: "1px solid #ccc",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#8884d8"
                    strokeWidth={2}
                    dot={{ fill: "#8884d8" }}
                    activeDot={{ r: 8 }}
                    animationDuration={800}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Top Products */}
          <Card>
            <CardHeader>
              <CardTitle>Top Products by Price</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topProducts.length === 0 ? (
                  <p className="text-muted-foreground text-center py-8">
                    No products available
                  </p>
                ) : (
                  topProducts.map((product, index) => (
                    <div
                      key={product.id}
                      className="flex items-center space-x-4"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium text-primary">
                          {index + 1}
                        </span>
                      </div>
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-10 h-10 object-cover rounded-md"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder.svg";
                        }}
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">
                          {product.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {product.category}
                        </p>
                      </div>
                      <div className="text-sm font-medium">
                        {formatPrice(product.price)}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}
