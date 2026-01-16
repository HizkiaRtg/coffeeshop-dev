import 'package:coffeeshop_app/core/components/custom_button_gradient.dart';
import 'package:coffeeshop_app/core/components/custom_field.dart';
import 'package:coffeeshop_app/core/constants/app_color.dart';
import 'package:coffeeshop_app/core/constants/app_font.dart';
import 'package:flutter/material.dart';

class RatingPage extends StatefulWidget {
  const RatingPage({super.key});

  @override
  State<RatingPage> createState() => _RatingPageState();
}

class _RatingPageState extends State<RatingPage> {
  String selectedChoice = '';
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
        title: const Text('Rating'),
        titleTextStyle: AppFont.blackText.copyWith(
          fontSize: 18,
          fontWeight: semiBold,
        ),
      ),
      body: ListView(
        padding: const EdgeInsets.all(24),
        children: [
          /// Rating
          Column(
            children: [
              Text(
                'How does it feel ?',
                style: AppFont.blackText.copyWith(
                  fontSize: 16,
                  fontWeight: regular,
                ),
              ),
              const SizedBox(height: 12),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
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
              const SizedBox(height: 12),
              Text(
                'Very Delicious',
                style: AppFont.blackText.copyWith(
                  fontSize: 16,
                  fontWeight: regular,
                ),
              ),
            ],
          ),
          const SizedBox(height: 12),
          Divider(
            color: AppColor.grey.withOpacity(0.5),
          ),
          const SizedBox(height: 12),

          /// Tap on review
          Column(
            children: [
              Text(
                'What do you like about the drink',
                style: AppFont.blackText.copyWith(
                  fontSize: 16,
                  fontWeight: regular,
                ),
              ),
              const SizedBox(height: 12),
              ListView.builder(
                shrinkWrap: true,
                physics: const NeverScrollableScrollPhysics(),
                padding: const EdgeInsets.symmetric(
                  horizontal: 24,
                  vertical: 24,
                ),
                itemCount: 5,
                itemBuilder: (context, index) {
                  final choices = [
                    'Fresh',
                    'Flavor',
                    'Cleanliness',
                    'Quality',
                    'Packaging'
                  ];
                  final choice = choices[index];

                  return GestureDetector(
                    onTap: () {
                      setState(() {
                        selectedChoice = choice;
                      });
                    },
                    child: Container(
                      margin: const EdgeInsets.only(bottom: 8),
                      padding: const EdgeInsets.symmetric(
                        horizontal: 12,
                        vertical: 8,
                      ),
                      decoration: BoxDecoration(
                        color: const Color(0xffEDEDED),
                        borderRadius: BorderRadius.circular(16),
                        border: Border.all(
                          color: selectedChoice == choice
                              ? AppColor.black
                              : const Color(0xffEDEDED),
                        ),
                      ),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Text(
                            choice,
                            style: AppFont.blackText.copyWith(
                              fontSize: 12,
                              fontWeight: medium,
                              color: selectedChoice == choice
                                  ? AppColor.black
                                  : null,
                            ),
                          ),
                          if (selectedChoice == choice)
                            const Icon(
                              Icons.check,
                              size: 14,
                              color: AppColor.black,
                            ),
                        ],
                      ),
                    ),
                  );
                },
              ),
            ],
          ),
          const SizedBox(height: 12),
          Divider(
            color: AppColor.grey.withOpacity(0.5),
          ),
          const SizedBox(height: 12),

          /// Comment
          Column(
            children: [
              Text(
                'Any suggestions or comments ?',
                style: AppFont.blackText.copyWith(
                  fontSize: 16,
                  fontWeight: regular,
                ),
              ),
              const CustomField.comment(
                label: '',
                maxLines: 5,
              ),
            ],
          ),

          const SizedBox(height: 20),

          /// Button
          CustomButtonGradient(
            onPressed: () {},
            text: 'Send',
          ),
        ],
      ),
    );
  }
}
