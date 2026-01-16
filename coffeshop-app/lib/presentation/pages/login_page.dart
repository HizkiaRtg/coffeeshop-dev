import 'package:coffeeshop_app/core/components/custom_button.dart';
import 'package:coffeeshop_app/core/components/custom_field.dart';
import 'package:coffeeshop_app/core/constants/app_color.dart';
import 'package:coffeeshop_app/core/constants/app_font.dart';
import 'package:coffeeshop_app/presentation/pages/dashboard_page.dart';
import 'package:coffeeshop_app/presentation/pages/register_page.dart';
import 'package:flutter/material.dart';

class LoginPage extends StatelessWidget {
  const LoginPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColor.white,
      body: ListView(
        padding: const EdgeInsets.all(24),
        children: [
          const SizedBox(height: 40),
          ClipRRect(
            borderRadius: BorderRadius.circular(10),
            child: Image.asset(
              'assets/images/img_onboarding.png',
              height: 200,
              fit: BoxFit.cover,
            ),
          ),
          const SizedBox(height: 30),
          const CustomField.email(
            label: 'Email',
          ),
          const CustomField.password(
            label: 'Password',
          ),
          const SizedBox(height: 20),
          CustomButton(
            onPressed: () {
              /// Menggunakan SNACKBAR
              ScaffoldMessenger.of(context).showSnackBar(
                const SnackBar(
                  content: Text('Login Success'),
                  backgroundColor: Colors.green,
                ),
              );
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => const DashboardPage(),
                ),
              );
            },
            text: 'Login',
            borderRadius: 50,
          ),
          const SizedBox(height: 20),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(
                "Don't have an account? ",
                style: AppFont.blackText.copyWith(),
              ),
              GestureDetector(
                onTap: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (context) => const RegisterPage(),
                    ),
                  );
                },
                child: Text(
                  'Register',
                  style: AppFont.primaryText.copyWith(
                    fontWeight: medium,
                  ),
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
