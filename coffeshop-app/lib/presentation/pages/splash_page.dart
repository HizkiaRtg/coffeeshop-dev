import 'dart:async';

import 'package:coffeeshop_app/core/constants/app_color.dart';
import 'package:coffeeshop_app/core/constants/app_font.dart';
import 'package:coffeeshop_app/presentation/pages/onboarding_page.dart';
import 'package:flutter/material.dart';

class SplashPage extends StatefulWidget {
  const SplashPage({super.key});

  @override
  State<SplashPage> createState() => _SplashPageState();
}

class _SplashPageState extends State<SplashPage> {
  @override
  void initState() {
    super.initState();
    // Setelah 3 detik, navigasi ke OnboardingPage
    Timer(const Duration(seconds: 4), () {
      Navigator.pushReplacement(
        context,
        MaterialPageRoute(builder: (context) => const OnboardingPage()),
      );
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColor.primary,
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              'Loading...',
              style: AppFont.whiteText.copyWith(
                fontSize: 24,
                fontWeight: bold,
              ),
            ),
            const SizedBox(height: 20),

            /// Menggunakan PROGRESS INDICATOR
            const CircularProgressIndicator(
              color: AppColor.white,
            ),
          ],
        ),
      ),
    );
  }
}
