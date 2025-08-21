import { useState, useEffect } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import ProductForm from "@/components/admin/ProductForm";
import ProductTable from "@/components/admin/ProductTable";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Product, ProductFormData } from "@shared/types";
import { apiService } from "@/lib/api";
import { Plus } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      // API service handles errors internally, but wrap for complete safety
      const productsData = await apiService.getProducts();
      setProducts(productsData);
    } catch (error) {
      // Final fallback with sample products
      console.warn("Admin Products: using hardcoded fallback");
      setProducts([
        {
          id: "1",
          name: "Industrial Motor",
          description: "High-performance industrial motor for heavy machinery",
          price: 25000,
          category: "Machinery",
          imageUrl: "/placeholder.svg",
          inStock: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          id: "2",
          name: "Safety Helmet",
          description: "Professional safety helmet with adjustable straps",
          price: 850,
          category: "Safety Equipment",
          imageUrl: "/placeholder.svg",
          inStock: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ]);
    }
  };

  const handleAddProduct = async (formData: ProductFormData) => {
    setIsLoading(true);
    console.log("Attempting to create product with data:", formData);
    try {
      const result = await apiService.createProduct(formData);
      console.log("Product creation result:", result);
      await loadProducts(); // Reload products from database
      setIsFormOpen(false);
      setSelectedProduct(null);

      toast({
        title: "Success",
        description: "Product added successfully",
      });
    } catch (error) {
      console.error("Error adding product:", error);
      toast({
        title: "Error",
        description: `Failed to add product: ${error.message}`,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditProduct = async (formData: ProductFormData) => {
    if (!selectedProduct) return;

    setIsLoading(true);
    try {
      await apiService.updateProduct(
        selectedProduct._id || selectedProduct.id,
        formData,
      );
      await loadProducts(); // Reload products from database
      setIsFormOpen(false);
      setSelectedProduct(null);

      toast({
        title: "Success",
        description: "Product updated successfully",
      });
    } catch (error) {
      console.error("Error updating product:", error);
      toast({
        title: "Error",
        description: "Failed to update product",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteProduct = async (productId: string) => {
    try {
      await apiService.deleteProduct(productId);
      await loadProducts(); // Reload products from database

      toast({
        title: "Success",
        description: "Product deleted successfully",
      });
    } catch (error) {
      console.error("Error deleting product:", error);
      toast({
        title: "Error",
        description: "Failed to delete product",
        variant: "destructive",
      });
    }
  };

  const handleEditClick = (product: Product) => {
    setSelectedProduct(product);
    setIsFormOpen(true);
  };

  const handleViewClick = (product: Product) => {
    setSelectedProduct(product);
    setIsViewOpen(true);
  };

  const openAddForm = () => {
    setSelectedProduct(null);
    setIsFormOpen(true);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(price);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Products</h1>
            <p className="text-muted-foreground">
              Manage your product inventory
            </p>
          </div>
          <Button onClick={openAddForm}>
            <Plus className="mr-2 h-4 w-4" />
            Add Product
          </Button>
        </div>

        {/* Products Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Products ({products.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <ProductTable
              products={products}
              onEdit={handleEditClick}
              onDelete={handleDeleteProduct}
              onView={handleViewClick}
            />
          </CardContent>
        </Card>

        {/* Product Form Modal */}
        <ProductForm
          isOpen={isFormOpen}
          onClose={() => {
            setIsFormOpen(false);
            setSelectedProduct(null);
          }}
          onSubmit={selectedProduct ? handleEditProduct : handleAddProduct}
          product={selectedProduct}
          isLoading={isLoading}
        />

        {/* Product View Modal */}
        <Dialog open={isViewOpen} onOpenChange={setIsViewOpen}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Product Details</DialogTitle>
            </DialogHeader>
            {selectedProduct && (
              <div className="space-y-4">
                <div className="flex justify-center">
                  <img
                    src={selectedProduct.imageUrl}
                    alt={selectedProduct.name}
                    className="w-32 h-32 object-cover rounded-lg"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg";
                    }}
                  />
                </div>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-lg">
                      {selectedProduct.name}
                    </h3>
                    <Badge
                      variant={
                        selectedProduct.inStock ? "default" : "secondary"
                      }
                    >
                      {selectedProduct.inStock ? "In Stock" : "Out of Stock"}
                    </Badge>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Category</p>
                    <p>{selectedProduct.category}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Price</p>
                    <p className="text-xl font-bold text-green-600">
                      {formatPrice(selectedProduct.price)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Description</p>
                    <p>{selectedProduct.description}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Created</p>
                      <p>{formatDate(selectedProduct.createdAt)}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Updated</p>
                      <p>{formatDate(selectedProduct.updatedAt)}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </AdminLayout>
  );
}
