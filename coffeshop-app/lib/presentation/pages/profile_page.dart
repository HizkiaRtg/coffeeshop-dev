import 'package:coffeeshop_app/core/components/custom_button_gradient.dart';
import 'package:coffeeshop_app/core/constants/app_color.dart';
import 'package:coffeeshop_app/core/constants/app_font.dart';
import 'package:coffeeshop_app/presentation/pages/address_page.dart';
import 'package:coffeeshop_app/presentation/pages/edit_profile_page.dart';
import 'package:coffeeshop_app/presentation/pages/order_history_page.dart';
import 'package:coffeeshop_app/presentation/widgets/profile_menu.dart';
import 'package:flutter/material.dart';

class ProfilePage extends StatelessWidget {
  const ProfilePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
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
          padding: const EdgeInsets.all(24),
          children: [
            const SizedBox(height: 50),
            Text(
              'My Profile',
              style: AppFont.whiteText.copyWith(
                fontSize: 22,
                fontWeight: semiBold,
              ),
            ),
            const SizedBox(height: 30),
            Container(
              padding: const EdgeInsets.symmetric(
                vertical: 12,
                horizontal: 16,
              ),
              decoration: BoxDecoration(
                color: AppColor.white,
                borderRadius: BorderRadius.circular(12),
              ),
              child: Row(
                children: [
                  const CircleAvatar(
                    radius: 30,
                    backgroundImage: AssetImage(
                      'assets/images/img_profile.jpg',
                    ),
                  ),
                  const SizedBox(width: 16),
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        'Person 1',
                        style: AppFont.blackText.copyWith(
                          fontSize: 18,
                          fontWeight: semiBold,
                        ),
                      ),
                      Text(
                        'person1@gmail.com',
                        style: AppFont.greyText.copyWith(
                          fontSize: 14,
                          fontWeight: regular,
                        ),
                      ),
                    ],
                  ),
                  const Spacer(),
                  InkWell(
                    onTap: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (context) => const EditProfilePage(),
                        ),
                      );
                    },
                    child: Image.asset(
                      'assets/images/ic_edit.png',
                      height: 24,
                    ),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 40),
            ProfileMenu(
              icon: Icons.calendar_today,
              title: 'Order History',
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => const OrderHistoryPage(),
                  ),
                );
              },
            ),
            ProfileMenu(
              icon: Icons.credit_card,
              title: 'Payment Method',
              onTap: () {},
            ),
            ProfileMenu(
              icon: Icons.location_pin,
              title: 'My Address',
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => const AddressPage(),
                  ),
                );
              },
            ),
            ProfileMenu(
              icon: Icons.wallet_giftcard,
              title: 'My Promo Codes',
              onTap: () {},
            ),
            ProfileMenu(
              icon: Icons.question_mark_outlined,
              title: 'About Us',
              onTap: () {},
            ),
            const SizedBox(height: 20),
            CustomButtonGradient(
              onPressed: () {},
              text: 'Logout',
            ),
          ],
        ),
      ),
    );
  }
}
