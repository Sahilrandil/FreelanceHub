package com.FreeLanceHub.Service;

import com.FreeLanceHub.Entity.Payment;

public interface PaymentService {

	Payment createPayment(Long jobId, Double amount);

	void markPaymentAsPaid(Long paymentId);

	Payment getPaymentByJob(Long jobId);
}
