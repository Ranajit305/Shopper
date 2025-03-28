import { Loader } from "lucide-react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useOrderStore } from "../stores/useOrderStore";

const OrderStatus = () => {

    const { verifyOrder } = useOrderStore();
    const { status } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (status === 'success') {
            verifyOrder();
        } else {
            toast.error('Order Failed')
        }
        navigate('/')
    }, []);

    return (
        <div className="flex items-center justify-center">
            <Loader className="animate-spin text-blue-500 size-10"/>
        </div>
    );
};

export default OrderStatus