import 'package:coffeeshop_app/core/components/custom_button.dart';
import 'package:coffeeshop_app/core/constants/app_color.dart';
import 'package:flutter/material.dart';

import '../../core/components/custom_field.dart';
import '../../core/constants/app_font.dart';

class RegisterPage extends StatelessWidget {
  const RegisterPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColor.white,
      body: ListView(
        padding: const EdgeInsets.all(24),
        children: [
          const SizedBox(height: 40),
          Text(
            'Register User',
            style: AppFont.blackText.copyWith(
              fontSize: 20,
              fontWeight: semiBold,
            ),
          ),
          const SizedBox(height: 30),
          const CustomField.text(
            label: 'Username',
          ),
          const CustomField.email(
            label: 'Email',
          ),
          const CustomField.password(
            label: 'Password',
          ),
          const CustomField.password(
            label: 'Confirm Password',
          ),
          const SizedBox(height: 20),
          CustomButton(
            onPressed: () {},
            text: 'Register',
            borderRadius: 50,
          ),
          const SizedBox(height: 20),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(
                'Already have an account? ',
                style: AppFont.blackText.copyWith(),
              ),
              GestureDetector(
                onTap: () {
                  Navigator.pop(context);
                },
                child: Text(
                  'Login',
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
