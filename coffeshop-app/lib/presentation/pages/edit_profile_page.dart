import 'package:coffeeshop_app/core/components/custom_button_gradient.dart';
import 'package:coffeeshop_app/core/components/custom_field.dart';
import 'package:coffeeshop_app/core/constants/app_font.dart';
import 'package:flutter/material.dart';

class EditProfilePage extends StatelessWidget {
  const EditProfilePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        elevation: 0,
        backgroundColor: Colors.white,
        centerTitle: true,
        leading: IconButton(
          icon: const Icon(
            Icons.arrow_back_ios,
            color: Colors.black,
          ),
          onPressed: () {
            Navigator.of(context).pop();
          },
        ),
        title: const Text('Edit Profile'),
        titleTextStyle: AppFont.blackText.copyWith(
          fontSize: 18,
          fontWeight: semiBold,
        ),
      ),
      body: ListView(
        padding: const EdgeInsets.all(24),
        children: [
          Center(
            child: Stack(
              alignment: Alignment.bottomRight,
              children: [
                const CircleAvatar(
                  radius: 50,
                  backgroundImage: AssetImage('assets/images/img_profile.jpg'),
                ),
                Container(
                  padding: const EdgeInsets.all(4),
                  decoration: const BoxDecoration(
                    color: Colors.white,
                    shape: BoxShape.circle,
                  ),
                  child: InkWell(
                    onTap: () {},
                    child: Container(
                      padding: const EdgeInsets.all(6),
                      decoration: const BoxDecoration(
                        color: Colors.grey,
                        shape: BoxShape.circle,
                      ),
                      child: Image.asset(
                        'assets/images/ic_edit.png',
                        color: Colors.white,
                        height: 20,
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
          const CustomField.text(
            label: 'Name',
          ),
          const CustomField.email(
            label: 'Email',
          ),
          const CustomField.text(
            label: 'Phone Number',
          ),
          const CustomField.text(
            label: 'Location',
          ),
          const SizedBox(height: 20),
          CustomButtonGradient(
            onPressed: () {},
            text: 'Save Changes',
          ),
        ],
      ),
    );
  }
}
