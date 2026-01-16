import 'package:flutter/material.dart';
import '../constants/app_font.dart';

class CustomButtonGradient extends StatelessWidget {
  final VoidCallback onPressed;
  final String text;

  const CustomButtonGradient({
    super.key,
    required this.onPressed,
    required this.text,
  });

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onPressed,
      child: Container(
        height: 50,
        width: double.infinity,
        decoration: BoxDecoration(
          gradient: const LinearGradient(
            begin: Alignment.centerLeft,
            end: Alignment.centerRight,
            colors: [
              Color(0xFF575F64),
              Color(0xFFAABAC3),
            ],
          ),
          borderRadius: BorderRadius.circular(50),
        ),
        child: Center(
          child: Text(
            text,
            style: AppFont.whiteText.copyWith(
              fontWeight: FontWeight.bold,
            ),
          ),
        ),
      ),
    );
  }
}
