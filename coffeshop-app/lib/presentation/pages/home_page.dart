import 'package:coffeeshop_app/core/constants/app_color.dart';
import 'package:coffeeshop_app/core/constants/app_font.dart';
import 'package:coffeeshop_app/models/category_model.dart';
import 'package:coffeeshop_app/models/drink_model.dart';
import 'package:coffeeshop_app/presentation/widgets/banner_slider.dart';
import 'package:coffeeshop_app/presentation/widgets/category_card.dart';
import 'package:coffeeshop_app/presentation/widgets/drink_card.dart';
import 'package:flutter/material.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: Container(
        decoration: const BoxDecoration(
          image: DecorationImage(
            image: AssetImage(
              'assets/images/img_bg.png',
            ),
            fit: BoxFit.cover,
          ),
        ),
        child: ListView(
          children: [
            const SizedBox(height: 20),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 24),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    'Hi User',
                    style: AppFont.whiteText.copyWith(
                      fontSize: 12,
                      fontWeight: medium,
                    ),
                  ),
                  Text(
                    'Apa yang ingin kamu minum hari ini?',
                    style: AppFont.whiteText.copyWith(
                      fontSize: 14,
                      fontWeight: bold,
                    ),
                  ),
                ],
              ),
            ),
            Container(
              margin: const EdgeInsets.symmetric(
                vertical: 20,
                horizontal: 24,
              ),
              decoration: BoxDecoration(
                color: const Color(0xff1E1E1E),
                borderRadius: BorderRadius.circular(12),
              ),
              child: TextFormField(
                readOnly: true,
                cursorColor: AppColor.primary,
                decoration: InputDecoration(
                  hintText: 'Search...',
                  hintStyle: AppFont.greyText.copyWith(
                    fontSize: 16,
                    fontWeight: semiBold,
                  ),
                  border: InputBorder.none,
                  prefixIcon: const Icon(
                    Icons.search,
                    color: AppColor.grey,
                  ),

                  /// Menggunakan TOOLTIP
                  suffixIcon: const Tooltip(
                    message: 'Untuk kirim inputan',
                    child: Icon(
                      Icons.send,
                      color: AppColor.grey,
                    ),
                  ),
                ),
                onChanged: (value) {},
              ),
            ),

            /// Menggunakan BANNDER dan SLIDER
            const BannerSlider(),

            /// Menggunakan LISTVIEW
            Container(
              margin: const EdgeInsets.symmetric(vertical: 10),
              height: 48,
              child: ListView.separated(
                scrollDirection: Axis.horizontal,
                physics: const BouncingScrollPhysics(),
                itemCount: categoriesData.length,
                padding: const EdgeInsets.symmetric(
                  horizontal: 24,
                  vertical: 8,
                ),
                separatorBuilder: (context, index) => const SizedBox(width: 16),
                itemBuilder: (context, index) {
                  return CategoryCard(
                    category: categoriesData[index],
                  );
                },
              ),
            ),
            Container(
              margin: const EdgeInsets.symmetric(vertical: 10),
              height: 220,
              child: ListView.separated(
                scrollDirection: Axis.horizontal,
                physics: const BouncingScrollPhysics(),
                itemCount: drinksData.length,
                padding: const EdgeInsets.symmetric(
                  horizontal: 24,
                  vertical: 8,
                ),
                separatorBuilder: (context, index) => const SizedBox(width: 18),
                itemBuilder: (context, index) {
                  return DrinkCard(
                    drink: drinksData[index],
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}
