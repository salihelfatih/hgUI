import Vue from "vue";
import Router from "vue-router";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import NotFoundPage from "@/pages/NotFoundPage";
import VendorPage from "@/pages/VendorPage";
import VendorProfile from "@/pages/VendorProfile";
import VendorDashboard from "@/pages/VendorDashboard";
import CustomerProfile from "@/pages/CustomerProfile";
import CustomerDashboard from "@/pages/CustomerDashboard";
import ProductPage from "@/pages/ProductPage";
import CartPage from "@/pages/CartPage";
import CheckoutPage from "@/pages/CheckoutPage";
import OrderPage from "@/pages/OrderPage";
import FavesPage from "@/pages/FavesPage";

import CustomerReportsTable from "@/components/reports/CustomerReportsTable";
import VendorReportsTable from "@/components/reports/VendorReportsTable";
import CustomerOrdersTable from "@/components/orders/CustomerOrdersTable";
import VendorOrdersTable from "@/components/orders/VendorOrdersTable";
import FavesTable from "@/components/faves/FavesTable";

import CustomerRegister from "@/components/auth/CustomerRegister";
import CustomerLogin from "@/components/auth/CustomerLogin";
import VendorRegister from "@/components/auth/VendorRegister";
import VendorLogin from "@/components/auth/VendorLogin";

import VendorsList from "@/components/vendors/VendorsList";
// import CreateVendor from "@/components/vendors/CreateVendor";
import EditVendor from "@/components/vendors/EditVendor";
import DeleteVendor from "@/components/vendors/DeleteVendor";
import ProductsTable from "@/components/products/ProductsTable";
import CreateProduct from "@/components/products/CreateProduct";
import EditProduct from "@/components/products/EditProduct";
import DeleteProduct from "@/components/products/DeleteProduct";

// import OrdersList from "@/components/orders/OrdersList";
// import CreateOrder from "@/components/orders/CreateOrder";
// import EditOrder from "@/components/orders/EditOrder";
// import DeleteOrder from "@/components/orders/DeleteOrder";
// import Checkout from "@/components/cart/Checkout";

Vue.use(Router);

export default [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/about",
    name: "About",
    component: AboutPage,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactPage,
  },
  // 404 page
  {
    path: "*",
    name: "NotFound",
    component: NotFoundPage,
  },

  // Customer routes
  {
    path: "/register",
    name: "register",
    component: CustomerRegister,
  },
  {
    path: "/login",
    name: "login",
    component: CustomerLogin,
  },
  {
    path: "/vendors/register",
    name: "vendor-register",
    component: VendorRegister,
  },
  {
    path: "/vendors/login",
    name: "vendor-login",
    component: VendorLogin,
  },
  {
    path: "/vendors",
    name: "vendors",
    component: VendorsList,
  },
  {
    path: "/vendors/:vendorId/products",
    name: "view-vendor",
    component: VendorPage,
    props: true,
  },
  {
    path: "/vendors/:vendorId/edit",
    name: "edit-kitchen",
    component: EditVendor,
  },
  {
    path: "/vendors/:vendorId/delete",
    name: "delete-kitchen",
    component: DeleteVendor,
  },
  {
    path: "/vendors/:vendorId/profile",
    name: "vendor-profile",
    component: VendorProfile,
    props: true,
  },
  {
    path: "/vendors/:vendorId/dashboard",
    name: "vendor-dashboard",
    component: VendorDashboard,
    props: true,
  },
  {
    path: "/vendors/:vendorId/dashboard/orders",
    name: "vendor-orders",
    component: VendorOrdersTable,
    props: true,
  },
  {
    path: "/vendors/:vendorId/dashboard/reports",
    name: "vendor-reports",
    component: VendorReportsTable,
    props: true,
  },
  {
    path: "/vendors/:vendorId/dashboard/products",
    name: "vendor-products",
    component: ProductsTable,
    props: true,
  },
  {
    path: "/vendors/:vendorId/products/create",
    name: "create-product",
    component: CreateProduct,
    props: true,
  },
  {
    path: "/vendors/:vendorId/products/:productId",
    name: "view-product",
    component: ProductPage,
    props: true,
  },
  {
    path: "/vendors/:vendorId/products/:productId/edit",
    name: "edit-product",
    component: EditProduct,
    props: true,
  },
  {
    path: "/vendors/:vendorId/products/:productId/delete",
    name: "delete-product",
    component: DeleteProduct,
    props: true,
  },
  {
    path: "/customers/:customerId/profile",
    name: "customer-profile",
    component: CustomerProfile,
    props: true,
  },
  {
    path: "/customers/:customerId/dashboard",
    name: "customer-dashboard",
    component: CustomerDashboard,
    props: true,
  },
  {
    path: "/customers/:customerId/dashboard/orders",
    name: "customer-orders",
    component: CustomerOrdersTable,
    props: true,
  },
  {
    path: "/customers/:customerId/dashboard/faves",
    name: "customer-faves",
    component: FavesTable,
    props: true,
  },
  {
    path: "/customers/:customerId/dashboard/reports",
    name: "customer-reports",
    component: CustomerReportsTable,
    props: true,
  },
  {
    path: "/customers/:customerId/faves",
    name: "view-faves",
    component: FavesPage,
  },
  {
    path: "/customers/:customerId/carts",
    name: "view-cart",
    component: CartPage,
    props: true,
  },
  {
    path: "/checkout",
    name: "checkout",
    component: CheckoutPage,
  },
  {
    path: "/order",
    name: "order",
    component: OrderPage,
  },
  {
    path: "/order/:orderId",
    name: "view-order",
    component: OrderPage,
    props: true,
  },
  // {
  //   path: "/order/:orderId/edit",
  //   name: "edit-order",
  //   component: EditOrder,
  //   props: true,
  // },
  // {
  //   path: "/order/:orderId/delete",
  //   name: "delete-order",
  //   component: DeleteOrder,
  //   props: true,
  // },
  // {
  //   path: "/order/:orderId/confirm",
  //   name: "confirm-order",
  //   component: ConfirmOrder,
  //   props: true,
  // },
  // {
  //   path: "/order/:orderId/decline",
  //   name: "decline-order",
  //   component: DeclineOrder,
  //   props: true,
  // },
  // {
  //   path: "/order/:orderId/complete",
  //   name: "complete-order",
  //   component: CompleteOrder,
  //   props: true,
  // },
  // {
  //   path: "/order/:orderId/cancel",
  //   name: "cancel-order",
  //   component: CancelOrder,
  //   props: true,
  // },
];
// import AdminRegister from '@/components/admins/AdminRegister'
// import AdminLogin from '@/components/admins/AdminLogin'
// import EditRecipe from '@/components/EditRecipe'
// import DeleteRecipe from '@/components/DeleteRecipe'
// import CreateIngredient from '@/components/CreateIngredient'
// import Ingredients from '@/components/Ingredients'
// import ViewIngredient from '@/components/ViewIngredient'
// import EditIngredient from '@/components/EditIngredient'
// import DeleteIngredient from '@/components/DeleteIngredient'
// import CreateReview from '@/components/CreateReview'
// import Reviews from '@/components/Reviews'
// import ViewReview from '@/components/ViewReview'
// import EditReview from '@/components/EditReview'
// import DeleteReview from '@/components/DeleteReview'
// import CreateOrder from '@/components/CreateOrder'
// import Orders from '@/components/Orders'
// import ViewOrder from '@/components/ViewOrder'
// import EditOrder from '@/components/EditOrder'
// import DeleteOrder from '@/components/DeleteOrder'
// import CreateOrderItem from '@/components/CreateOrderItem'
// import OrderItems from '@/components/OrderItems'
// import ViewOrderItem from '@/components/ViewOrderItem'
// import EditOrderItem from '@/components/EditOrderItem'
// import DeleteOrderItem from '@/components/DeleteOrderItem'
// import CreateOrderReview from '@/components/CreateOrderReview'
// import OrderReviews from '@/components/OrderReviews'
// import ViewOrderReview from '@/components/ViewOrderReview'
// import EditOrderReview from '@/components/EditOrderReview'
// import DeleteOrderReview from '@/components/DeleteOrderReview'
// import ViewRecipes from "@/components/recipes/ViewRecipes";
// import CreateRecipe from "@/components/recipes/CreateRecipe";
// import ViewRecipe from "@/components/recipes/ViewRecipe";
