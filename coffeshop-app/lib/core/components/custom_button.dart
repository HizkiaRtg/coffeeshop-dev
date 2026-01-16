import 'package:flutter/material.dart';

import '../constants/app_color.dart';
import '../constants/app_font.dart';

class CustomButton extends StatelessWidget {
  final VoidCallback onPressed;
  final String text;
  final double borderRadius;

  const CustomButton({
    super.key,
    required this.onPressed,
    required this.text,
    this.borderRadius = 12,
  });

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 50,
      width: double.infinity,
      child: ElevatedButton(
        style: ElevatedButton.styleFrom(
          backgroundColor: AppColor.primary,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(borderRadius),
          ),
        ),
        onPressed: onPressed,
        child: Text(
          text,
          style: AppFont.whiteText.copyWith(
            fontWeight: medium,
          ),
        ),
      ),
    );
  }
}
