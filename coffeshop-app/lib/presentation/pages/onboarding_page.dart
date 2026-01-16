import 'package:coffeeshop_app/core/components/custom_button.dart';
import 'package:coffeeshop_app/core/constants/app_font.dart';
import 'package:coffeeshop_app/presentation/pages/login_page.dart';
import 'package:flutter/material.dart';

class OnboardingPage extends StatelessWidget {
  const OnboardingPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Image.asset(
              'assets/images/img_drink.png',
              width: 200,
            ),
            const SizedBox(height: 40),
            Padding(
              padding: const EdgeInsets.all(24),
              child: Column(
                children: [
                  Text(
                    'Hidupi Suasana Harimu dengan Minuman Segar',
                    style: AppFont.blackText.copyWith(
                      fontSize: 20,
                      fontWeight: semiBold,
                    ),
                    textAlign: TextAlign.center,
                  ),
                  const SizedBox(height: 8),
                  Text(
                    'Tenggorokan Segar, Aktivitas Lancar',
                    style: AppFont.greyText.copyWith(
                      fontSize: 14,
                      fontWeight: regular,
                    ),
                    textAlign: TextAlign.center,
                  ),
                  const SizedBox(height: 30),
                  CustomButton(
                    onPressed: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (context) => const LoginPage(),
                        ),
                      );
                    },
                    text: 'Get Started',
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
