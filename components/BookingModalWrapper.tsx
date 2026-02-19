"use client";

import { useBooking } from "@/contexts/BookingContext";
import BookingModal from "./BookingModal";

const BookingModalWrapper = () => {
    const { isOpen, closeModal } = useBooking();
    return <BookingModal isOpen={isOpen} onClose={closeModal} />;
};

export default BookingModalWrapper;
