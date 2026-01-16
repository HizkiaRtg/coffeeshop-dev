import 'package:coffeeshop_app/core/components/custom_button_gradient.dart';
import 'package:coffeeshop_app/core/constants/app_color.dart';
import 'package:coffeeshop_app/core/constants/app_font.dart';
import 'package:coffeeshop_app/models/drink_model.dart';
import 'package:coffeeshop_app/presentation/pages/dashboard_page.dart';
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

class OrderPage extends StatefulWidget {
  final DrinkModel drink;
  final double totalItemPrice;
  const OrderPage({
    super.key,
    required this.drink,
    required this.totalItemPrice,
  });

  @override
  State<OrderPage> createState() => _OrderPageState();
}

class _OrderPageState extends State<OrderPage> {
  DateTime selectedDate = DateTime.now();
  int quantity = 1;

  Future<void> _selectDate(BuildContext context) async {
    final DateTime? picked = await showDatePicker(
      context: context,
      initialDate: selectedDate,
      firstDate: DateTime.now(),
      lastDate: DateTime(2100),
    );
    if (picked != null && picked != selectedDate) {
      setState(() {
        selectedDate = picked;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    double pricePerItem = widget.totalItemPrice;
    double deliveryFee = 1.0;
    double totalPrice = pricePerItem * quantity + deliveryFee;

    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        elevation: 0,
        backgroundColor: Colors.white,
        centerTitle: true,
        leading: IconButton(
          icon: const Icon(
            Icons.arrow_back_ios,
            color: Colors.black,
          ),
          onPressed: () {
            Navigator.of(context).pop();
          },
        ),
        title: const Text('Order'),
        titleTextStyle: AppFont.blackText.copyWith(
          fontSize: 18,
          fontWeight: FontWeight.w600,
        ),
      ),
      body: ListView(
        padding: const EdgeInsets.all(24),
        children: [
          Text(
            'Delivery Address',
            style: AppFont.blackText.copyWith(
              fontSize: 16,
              fontWeight: semiBold,
            ),
          ),

          /// Address
          Container(
            margin: const EdgeInsets.symmetric(vertical: 8),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  'Jl. Kpg Sutoyo',
                  style: AppFont.blackText.copyWith(
                    fontSize: 14,
                    fontWeight: medium,
                  ),
                ),
                Text(
                  'Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.',
                  style: AppFont.greyText.copyWith(
                    fontSize: 12,
                  ),
                ),
                const SizedBox(height: 8),
                Row(
                  children: [
                    Container(
                      padding: const EdgeInsets.symmetric(
                        horizontal: 12,
                        vertical: 6,
                      ),
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(16),
                        border: Border.all(
                          color: Colors.grey,
                        ),
                      ),
                      child: Row(
                        children: [
                          Image.asset(
                            'assets/images/ic_edit.png',
                            height: 16,
                          ),
                          const SizedBox(width: 4),
                          Text(
                            'Edit Address',
                            style: AppFont.blackText.copyWith(
                              fontSize: 12,
                            ),
                          ),
                        ],
                      ),
                    ),
                    const SizedBox(
                      width: 12,
                    ),
                    Container(
                      padding: const EdgeInsets.symmetric(
                        horizontal: 12,
                        vertical: 6,
                      ),
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(16),
                        border: Border.all(
                          color: Colors.grey,
                        ),
                      ),
                      child: Row(
                        children: [
                          Image.asset(
                            'assets/images/ic_note.png',
                            height: 16,
                          ),
                          const SizedBox(width: 4),
                          Text(
                            'Add Note',
                            style: AppFont.blackText.copyWith(
                              fontSize: 12,
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
          // OrderCard(
          //   drink: widget.drink,
          // ),
          Container(
            margin: const EdgeInsets.symmetric(
              vertical: 12,
            ),
            child: Row(
              children: [
                /// Image
                ClipRRect(
                  borderRadius: BorderRadius.circular(12),
                  child: Image.asset(
                    widget.drink.image,
                    height: 60,
                    fit: BoxFit.cover,
                  ),
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        widget.drink.name,
                        style: AppFont.blackText.copyWith(
                          fontSize: 14,
                          fontWeight: medium,
                        ),
                        maxLines: 1,
                        overflow: TextOverflow.ellipsis,
                      ),
                      Text(
                        widget.drink.variant,
                        style: AppFont.greyText.copyWith(
                          fontSize: 12,
                          fontWeight: regular,
                        ),
                        maxLines: 1,
                        overflow: TextOverflow.ellipsis,
                      ),
                      const SizedBox(height: 8),
                    ],
                  ),
                ),
                Row(
                  children: [
                    GestureDetector(
                      onTap: () {
                        if (quantity > 1) {
                          setState(() {
                            quantity--;
                          });
                        }
                      },
                      child: Container(
                        padding: const EdgeInsets.all(6),
                        decoration: BoxDecoration(
                          shape: BoxShape.circle,
                          border: Border.all(
                            color: quantity == 1 ? Colors.grey : AppColor.black,
                            width: 1,
                          ),
                        ),
                        child: Icon(
                          Icons.remove,
                          size: 16,
                          color: quantity == 1 ? Colors.grey : AppColor.black,
                        ),
                      ),
                    ),
                    SizedBox(
                      width: 32.0,
                      child: Center(
                        child: Text(
                          '$quantity',
                          style: AppFont.blackText.copyWith(
                            fontSize: 14,
                            fontWeight: semiBold,
                          ),
                        ),
                      ),
                    ),
                    GestureDetector(
                      onTap: () {
                        setState(() {
                          quantity++;
                        });
                      },
                      child: Container(
                        padding: const EdgeInsets.all(6),
                        decoration: BoxDecoration(
                          shape: BoxShape.circle,
                          border: Border.all(
                            color: AppColor.black,
                            width: 1,
                          ),
                        ),
                        child: const Icon(
                          Icons.add,
                          size: 16,
                          color: AppColor.black,
                        ),
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
          const SizedBox(height: 8),

          /// Menggunakan DATETIME PICKER
          TextFormField(
            readOnly: true,
            onTap: () => _selectDate(context),
            decoration: InputDecoration(
              labelText: 'Delivery Date',
              labelStyle: AppFont.blackText.copyWith(
                fontSize: 16,
                fontWeight: FontWeight.w600,
              ),
              suffixIcon: const Icon(
                Icons.calendar_today,
                color: AppColor.black,
              ),
              border: OutlineInputBorder(
                borderRadius: BorderRadius.circular(8),
                borderSide: const BorderSide(color: AppColor.black),
              ),
              focusedBorder: OutlineInputBorder(
                borderRadius: BorderRadius.circular(8),
                borderSide: const BorderSide(color: AppColor.black),
              ),
              contentPadding:
                  const EdgeInsets.symmetric(vertical: 12, horizontal: 16),
            ),
            controller: TextEditingController(
              /// Menggunakan PACCKAGE INTL untuk konversi tanggal
              text: DateFormat('dd MMMM yyyy').format(selectedDate),
            ),
          ),

          const SizedBox(height: 20),
          Text(
            'Payment Summary',
            style: AppFont.blackText.copyWith(
              fontSize: 16,
              fontWeight: semiBold,
            ),
          ),
          const SizedBox(height: 16),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(
                'Price',
                style: AppFont.blackText.copyWith(
                  fontSize: 12,
                  fontWeight: regular,
                ),
              ),
              Text(
                '\$ ${pricePerItem.toStringAsFixed(2)}',
                style: AppFont.blackText.copyWith(
                  fontSize: 12,
                  fontWeight: semiBold,
                ),
              ),
            ],
          ),
          const SizedBox(height: 8),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(
                'Delivery Fee',
                style: AppFont.blackText.copyWith(
                  fontSize: 12,
                  fontWeight: regular,
                ),
              ),
              Text(
                '\$ ${deliveryFee.toStringAsFixed(2)}',
                style: AppFont.blackText.copyWith(
                  fontSize: 12,
                  fontWeight: semiBold,
                ),
              ),
            ],
          ),
          const SizedBox(height: 8),
          Divider(
            color: AppColor.grey.withOpacity(0.5),
          ),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(
                'Total Payment',
                style: AppFont.blackText.copyWith(
                  fontSize: 12,
                  fontWeight: regular,
                ),
              ),
              Text(
                '\$ ${totalPrice.toStringAsFixed(2)}',
                style: AppFont.blackText.copyWith(
                  fontSize: 12,
                  fontWeight: semiBold,
                ),
              ),
            ],
          ),
        ],
      ),
      bottomNavigationBar: Container(
        color: AppColor.white,
        height: 80,
        padding: const EdgeInsets.symmetric(
          vertical: 8,
          horizontal: 40,
        ),
        child: Column(
          children: [
            Row(
              children: [
                Image.asset(
                  'assets/images/ic_money.png',
                  height: 24,
                ),
                const SizedBox(width: 8),
                Container(
                  decoration: BoxDecoration(
                    color: const Color(0xffF6F6F6),
                    borderRadius: BorderRadius.circular(20),
                  ),
                  child: Row(
                    children: [
                      Container(
                        padding: const EdgeInsets.symmetric(
                          horizontal: 12,
                          vertical: 6,
                        ),
                        decoration: BoxDecoration(
                          color: const Color(0xff575F64),
                          borderRadius: BorderRadius.circular(20),
                        ),
                        child: Text(
                          'Cash',
                          style: AppFont.whiteText.copyWith(
                            fontSize: 12,
                            fontWeight: regular,
                          ),
                        ),
                      ),
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 12),
                        child: Text(
                          '\$ ${totalPrice.toStringAsFixed(2)}',
                          style: AppFont.blackText.copyWith(
                            fontSize: 12,
                            fontWeight: semiBold,
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
                const Spacer(),
                Container(
                  decoration: const BoxDecoration(
                    shape: BoxShape.circle,
                    color: Color(0xff575F64),
                  ),
                  padding: const EdgeInsets.all(2),
                  child: const Icon(
                    Icons.more_horiz,
                    size: 20,
                    color: Colors.white,
                  ),
                )
              ],
            ),
            const SizedBox(height: 4),
            Expanded(
              child: CustomButtonGradient(
                onPressed: () {
                  /// Menggunakan DIALOG
                  showDialog(
                    context: context,
                    builder: (context) {
                      return AlertDialog(
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(12.0),
                        ),
                        title: const Text('Order Success'),
                        content: Text(
                          'Item : ${widget.drink.name}\nDelivery Date : ${DateFormat('dd MMMM yyyy').format(selectedDate)}\nTotal Price : ${'\$ ${totalPrice.toStringAsFixed(2)}'}',
                        ),
                        actions: [
                          Padding(
                            padding: const EdgeInsets.all(12),
                            child: CustomButtonGradient(
                              onPressed: () {
                                Navigator.pushAndRemoveUntil(
                                  context,
                                  MaterialPageRoute(
                                    builder: (context) => const DashboardPage(),
                                  ),
                                  (route) => false,
                                );
                              },
                              text: 'Ok',
                            ),
                          ),
                        ],
                      );
                    },
                  );
                },
                text: 'Order',
              ),
            ),
          ],
        ),
      ),
    );
  }
}
