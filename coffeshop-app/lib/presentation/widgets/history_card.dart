import 'package:coffeeshop_app/core/constants/app_color.dart';
import 'package:coffeeshop_app/core/constants/app_font.dart';
import 'package:coffeeshop_app/models/drink_model.dart';
import 'package:coffeeshop_app/presentation/pages/rating_page.dart';
import 'package:flutter/material.dart';

class HistoryCard extends StatelessWidget {
  final DrinkModel drink;
  const HistoryCard({
    super.key,
    required this.drink,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.symmetric(
        vertical: 12,
      ),
      padding: const EdgeInsets.symmetric(
        horizontal: 20,
        vertical: 12,
      ),
      decoration: BoxDecoration(
        color: AppColor.white,
        borderRadius: BorderRadius.circular(12),
        border: Border.all(
          width: 1,
          color: AppColor.grey.withOpacity(0.2),
        ),
      ),
      child: Column(
        children: [
          Row(
            children: [
              /// Image
              ClipRRect(
                borderRadius: BorderRadius.circular(12),
                child: Image.asset(
                  drink.image,
                  height: 80,
                  width: 80,
                  fit: BoxFit.cover,
                ),
              ),
              const SizedBox(width: 12),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      drink.name,
                      style: AppFont.blackText.copyWith(
                        fontSize: 14,
                        fontWeight: medium,
                      ),
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                    ),
                    const SizedBox(height: 4),
                    Text(
                      'Jl. Jendral Sudirman',
                      style: AppFont.blackText.copyWith(
                        fontSize: 12,
                        fontWeight: medium,
                      ),
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                    ),
                    Text(
                      'Jl. Jendral Sudirman no. 49a, Tanjungbalai Selatan, Kabupaten Asahan, Sumatera Utara',
                      style: AppFont.greyText.copyWith(
                        fontSize: 10,
                        fontWeight: regular,
                      ),
                      maxLines: 3,
                      overflow: TextOverflow.ellipsis,
                    ),
                    const SizedBox(height: 8),
                  ],
                ),
              ),
            ],
          ),
          Divider(
            color: AppColor.grey.withOpacity(0.5),
          ),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    '\$ 6.7',
                    style: AppFont.blackText.copyWith(
                      fontSize: 12,
                      fontWeight: semiBold,
                    ),
                  ),
                  Text(
                    '1 Menu',
                    style: AppFont.blackText.copyWith(
                      fontSize: 12,
                      fontWeight: semiBold,
                    ),
                  ),
                ],
              ),

              /// Button order again
              GestureDetector(
                onTap: () {},
                child: Container(
                  padding: const EdgeInsets.symmetric(
                    horizontal: 18,
                    vertical: 8,
                  ),
                  decoration: BoxDecoration(
                    color: const Color(0xffF0F0F0),
                    borderRadius: BorderRadius.circular(20),
                  ),
                  child: Text(
                    'Order Again',
                    style: AppFont.blackText.copyWith(
                      fontSize: 12,
                      fontWeight: bold,
                    ),
                  ),
                ),
              ),
            ],
          ),
          const SizedBox(height: 12),

          /// Add review rating
          GestureDetector(
            onTap: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => const RatingPage(),
                ),
              );
            },
            child: Container(
              padding: const EdgeInsets.symmetric(
                horizontal: 12,
                vertical: 6,
              ),
              decoration: BoxDecoration(
                color: AppColor.white,
                borderRadius: BorderRadius.circular(12),
                border: Border.all(
                  width: 1,
                  color: AppColor.grey.withOpacity(0.2),
                ),
              ),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  Text(
                    'Rating',
                    style: AppFont.blackText.copyWith(
                      fontSize: 16,
                      fontWeight: semiBold,
                    ),
                  ),
                  const SizedBox(width: 12),
                  Row(
                    children: List.generate(
                      5,
                      (index) => Padding(
                        padding: const EdgeInsets.only(right: 8.0),
                        child: Image.asset(
                          'assets/images/ic_star_border.png',
                          color: AppColor.black,
                          height: 24,
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
