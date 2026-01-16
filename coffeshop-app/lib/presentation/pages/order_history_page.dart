import 'package:coffeeshop_app/core/constants/app_font.dart';
import 'package:coffeeshop_app/models/drink_model.dart';
import 'package:coffeeshop_app/presentation/widgets/history_card.dart';
import 'package:flutter/material.dart';

class OrderHistoryPage extends StatelessWidget {
  const OrderHistoryPage({super.key});

  @override
  Widget build(BuildContext context) {
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
        title: const Text('Order History'),
        titleTextStyle: AppFont.blackText.copyWith(
          fontSize: 18,
          fontWeight: semiBold,
        ),
      ),
      body: ListView(
        children: [
          ListView.builder(
            shrinkWrap: true,
            physics: const NeverScrollableScrollPhysics(),
            itemCount: drinksData.length,
            padding: const EdgeInsets.symmetric(
              horizontal: 24,
              vertical: 8,
            ),
            itemBuilder: (context, index) {
              return HistoryCard(
                drink: drinksData[index],
              );
            },
          ),
        ],
      ),
    );
  }
}
