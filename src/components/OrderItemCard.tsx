import { Order, OrderStatus } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { ORDER_STATUS } from "@/config/order-status-config";
import { useUpdateMyRestaurantOrder } from "@/api/MyRestaurantApi";
import { useEffect, useState } from "react";

const OrderItemCard = ({ order }: { order: Order }) => {
  const { updateRestaurantStatus, isLoading } = useUpdateMyRestaurantOrder();
  const [status, setStatus] = useState<OrderStatus>(order.status);

  useEffect(() => {
    setStatus(order.status);
  }, [order.status]);

  const handleStatusChange = async (newStatus: OrderStatus) => {
    await updateRestaurantStatus({ orderId: order._id as string, status: newStatus });
    setStatus(newStatus);
  };

  const getTime = () => {
    const orderDateTime = new Date(order.createdAt);
    return orderDateTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <Card className="p-4 shadow-sm border border-gray-200">
      <CardHeader>
        <CardTitle className="grid md:grid-cols-4 gap-3 text-sm font-medium">
          <div>
            <span className="text-gray-600">Customer:</span> {order.deliveryDetails.name}
          </div>
          <div>
            <span className="text-gray-600">Address:</span> {order.deliveryDetails.addressLine1}, {order.deliveryDetails.city}
          </div>
          <div>
            <span className="text-gray-600">Time:</span> {getTime()}
          </div>
          <div>
            <span className="text-gray-600">Total Cost:</span> £{(order.totalAmount / 100).toFixed(2)}
          </div>
        </CardTitle>
        <Separator className="my-3" />
      </CardHeader>
      <CardContent className="flex flex-col gap-4 text-sm">
        <div className="flex flex-col gap-2">
          {order.cartItems.map((cartItem, index) => (
            <span key={index}>
              <Badge variant="outline" className="mr-2 text-xs p-1">
                {cartItem.quantity}
              </Badge>
              {cartItem.name}
            </span>
          ))}
        </div>
        <div className="flex flex-col space-y-2">
          <Label htmlFor="status" className="text-gray-700 text-sm">Order Status</Label>
          <Select
            value={status}
            disabled={isLoading}
            onValueChange={(value) => handleStatusChange(value as OrderStatus)}
          >
            <SelectTrigger id="status" className="text-sm border border-gray-300 rounded-lg p-2 shadow-sm bg-white">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent 
              position="popper" 
              className="bg-white shadow-lg rounded-lg p-2 border border-gray-200"
            >
              {ORDER_STATUS.map((status) => (
                <SelectItem 
                  key={status.value} 
                  value={status.value} 
                  className="px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md cursor-pointer"
                >
                  {status.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderItemCard;
