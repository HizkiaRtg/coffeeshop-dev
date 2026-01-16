import 'package:coffeeshop_app/core/constants/app_color.dart';
import 'package:coffeeshop_app/core/constants/app_font.dart';
import 'package:flutter/material.dart';

class ProfileMenu extends StatelessWidget {
  final IconData icon;
  final String title;
  final VoidCallback onTap;
  const ProfileMenu({
    super.key,
    required this.icon,
    required this.title,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        InkWell(
          onTap: onTap,
          child: Padding(
            padding: const EdgeInsets.symmetric(vertical: 10),
            child: Row(
              children: [
                Icon(
                  icon,
                  color: AppColor.grey,
                ),
                const SizedBox(width: 16),
                Text(
                  title,
                  style: AppFont.blackText.copyWith(
                    fontSize: 16,
                    fontWeight: semiBold,
                  ),
                ),
                const Spacer(),
                const Icon(
                  Icons.arrow_forward_ios_rounded,
                  size: 16,
                  color: AppColor.grey,
                ),
              ],
            ),
          ),
        ),
        Divider(
          color: AppColor.grey.withOpacity(0.5),
        ),
      ],
    );
  }
}
