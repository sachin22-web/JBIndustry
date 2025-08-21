import { Product, ProductFormData, DashboardStats } from "@shared/types";

const API_BASE_URL = import.meta.env.VITE_API_URL || "/api";

class ApiService {
  private async request<T>(
    endpoint: string,
    options: RequestInit = {},
  ): Promise<T> {
    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    });

    // 🛡️ Error handling
    if (!res.ok) {
      let message = `API request failed with status ${res.status}`;
      try {
        const error = await res.json();
        message = error.message || error.error || message;
        console.error(
          "API Error Details:",
          JSON.stringify(
            {
              endpoint,
              status: res.status,
              statusText: res.statusText,
              error,
            },
            null,
            2,
          ),
        );
      } catch (parseError) {
        console.error(
          "API Error (failed to parse):",
          JSON.stringify(
            {
              endpoint,
              status: res.status,
              statusText: res.statusText,
              parseError:
                parseError instanceof Error
                  ? parseError.message
                  : String(parseError),
            },
            null,
            2,
          ),
        );
      }
      throw new Error(message);
    }

    const text = await res.text();
    if (!text) {
      return null;
    }

    let json;
    try {
      json = JSON.parse(text);
    } catch (parseError) {
      console.error(
        "Failed to parse response JSON:",
        JSON.stringify(
          {
            endpoint,
            responseText:
              text.substring(0, 200) + (text.length > 200 ? "..." : ""),
            parseError:
              parseError instanceof Error
                ? parseError.message
                : String(parseError),
          },
          null,
          2,
        ),
      );
      throw new Error("Invalid JSON response from server");
    }

    // Handle both direct data and wrapped responses
    if (json.success && json.data !== undefined) {
      return json.data;
    }

    // Return the json directly if it's not wrapped
    return json;
  }

  async getProducts(): Promise<Product[]> {
    return await this.request<Product[]>("/products");
  }

  async getProduct(id: string): Promise<Product> {
    return await this.request<Product>(`/products/${id}`);
  }

  async createProduct(productData: ProductFormData): Promise<Product> {
    console.log("API Service: Creating product with data:", productData);
    console.log("API Service: JSON body:", JSON.stringify(productData));
    return await this.request<Product>("/products", {
      method: "POST",
      body: JSON.stringify(productData),
    });
  }

  async updateProduct(
    id: string,
    productData: Partial<ProductFormData>,
  ): Promise<Product> {
    return await this.request<Product>(`/products/${id}`, {
      method: "PUT",
      body: JSON.stringify(productData),
    });
  }

  async deleteProduct(id: string): Promise<void> {
    await this.request<void>(`/products/${id}`, {
      method: "DELETE",
    });
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return await this.request<Product[]>(`/products/category/${category}`);
  }

  async getProductStats(): Promise<DashboardStats> {
    try {
      return await this.request<DashboardStats>("/products/stats");
    } catch {
      return {
        totalProducts: 0,
        inStockProducts: 0,
        outOfStockProducts: 0,
        totalRevenue: 0,
      };
    }
  }
}

export const apiService = new ApiService();
