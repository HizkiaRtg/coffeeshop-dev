import 'package:coffeeshop_app/core/constants/app_font.dart';
import 'package:coffeeshop_app/models/drink_model.dart';
import 'package:coffeeshop_app/presentation/pages/detail_product_page.dart';
import 'package:flutter/material.dart';

class DrinkCard extends StatelessWidget {
  final DrinkModel drink;
  const DrinkCard({
    super.key,
    required this.drink,
  });

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        Navigator.push(
          context,
          MaterialPageRoute(
            builder: (context) => DetailProductPage(drink: drink),
          ),
        );
      },
      child: Container(
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(10),
          gradient: const LinearGradient(
            begin: Alignment.centerLeft,
            end: Alignment.centerRight,
            colors: [
              Color(0xFF364955),
              Color(0xFF656667),
            ],
          ),
          boxShadow: [
            BoxShadow(
              color: Colors.black.withOpacity(0.3),
              spreadRadius: 0,
              blurRadius: 4,
              offset: const Offset(0, 4),
            ),
          ],
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            /// Image
            ClipRRect(
              borderRadius: BorderRadius.circular(10),
              child: Image.asset(
                width: 135,
                height: 145,
                drink.image,
                fit: BoxFit.cover,
              ),
            ),
            const SizedBox(height: 8),
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 10),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    drink.name,
                    style: AppFont.whiteText.copyWith(
                      fontSize: 12,
                      fontWeight: medium,
                    ),
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                  ),
                  Text(
                    drink.variant,
                    style: AppFont.whiteText.copyWith(
                      fontSize: 10,
                      fontWeight: regular,
                    ),
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
