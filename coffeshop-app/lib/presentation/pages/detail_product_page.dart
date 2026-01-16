import 'package:coffeeshop_app/core/components/custom_button_gradient.dart';
import 'package:coffeeshop_app/core/constants/app_color.dart';
import 'package:coffeeshop_app/core/constants/app_font.dart';
import 'package:coffeeshop_app/models/drink_model.dart';
import 'package:coffeeshop_app/presentation/pages/order_page.dart';
import 'package:flutter/material.dart';

class DetailProductPage extends StatefulWidget {
  final DrinkModel drink;
  const DetailProductPage({
    super.key,
    required this.drink,
  });

  @override
  State<DetailProductPage> createState() => _DetailProductPageState();
}

class _DetailProductPageState extends State<DetailProductPage> {
  String selectedSize = 'S';
  String selectedSugar = '20%';
  bool bobaOption = false;

  double calculatePrice() {
    double price = widget.drink.price;

    if (selectedSize == 'M') {
      price += 0.2;
    } else if (selectedSize == 'L') {
      price += 0.5;
    }

    return price;
  }

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
        title: const Text('Detail'),
        titleTextStyle: AppFont.blackText.copyWith(
          fontSize: 18,
          fontWeight: semiBold,
        ),
        actions: [
          IconButton(
            icon: const Icon(
              Icons.share,
              color: Colors.black,
            ),
            onPressed: () {
              /// Menggunakan BOTTOMSHEET
              showModalBottomSheet(
                context: context,
                builder: (context) {
                  return Container(
                    color: Colors.white,
                    child: ListView(
                      padding: const EdgeInsets.symmetric(vertical: 20),
                      children: [
                        /// Menggunakan LISTTILE
                        ListTile(
                          leading: const Icon(Icons.email),
                          title: const Text('Share via Email'),
                          onTap: () {
                            Navigator.pop(context);
                          },
                        ),
                        ListTile(
                          leading: const Icon(Icons.message),
                          title: const Text('Share via SMS'),
                          onTap: () {
                            Navigator.pop(context);
                          },
                        ),
                        ListTile(
                          leading: const Icon(Icons.copy),
                          title: const Text('Copy Link'),
                          onTap: () {
                            Navigator.pop(context);
                          },
                        ),
                      ],
                    ),
                  );
                },
              );
            },
          ),
          IconButton(
            icon: const Icon(
              Icons.favorite_outline,
              color: Colors.black,
            ),
            onPressed: () {},
          ),
        ],
      ),
      body: ListView(
        padding: const EdgeInsets.all(24),
        children: [
          /// Image
          Container(
            margin: const EdgeInsets.only(bottom: 18),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(10),
              boxShadow: [
                BoxShadow(
                  color: Colors.black.withOpacity(0.2),
                  spreadRadius: 0,
                  blurRadius: 4,
                  offset: const Offset(0, 4),
                ),
              ],
              border: Border.all(
                color: Colors.black,
                width: 1,
              ),
            ),
            child: ClipRRect(
              borderRadius: BorderRadius.circular(10),
              child: Image.asset(
                widget.drink.image,
                height: 250,
                fit: BoxFit.cover,
              ),
            ),
          ),

          /// Name
          Text(
            widget.drink.name,
            style: AppFont.blackText.copyWith(
              fontSize: 20,
              fontWeight: semiBold,
            ),
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
          ),
          Row(
            children: [
              const Icon(
                Icons.star,
                color: Colors.amber,
                size: 20,
              ),
              const SizedBox(width: 4),
              Text(
                '${widget.drink.rating}',
                style: AppFont.blackText.copyWith(
                  fontSize: 16,
                  fontWeight: medium,
                ),
              ),
              const SizedBox(width: 4),
              Text(
                '(${widget.drink.numReviews})',
                style: AppFont.greyText.copyWith(
                  fontSize: 16,
                  fontWeight: regular,
                ),
              ),
            ],
          ),
          const SizedBox(height: 16),
          Divider(
            color: AppColor.grey.withOpacity(0.5),
          ),
          Text(
            'Description',
            style: AppFont.blackText.copyWith(
              fontSize: 16,
              fontWeight: semiBold,
            ),
          ),
          const SizedBox(height: 4),
          Text(
            widget.drink.description,
            style: AppFont.greyText.copyWith(
              fontSize: 12,
            ),
          ),
          const SizedBox(height: 24),
          Text(
            'Size',
            style: AppFont.blackText.copyWith(
              fontSize: 16,
              fontWeight: semiBold,
            ),
          ),
          const SizedBox(height: 4),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: [
              buildSizeOption('S'),
              buildSizeOption('M'),
              buildSizeOption('L'),
            ],
          ),
          const SizedBox(height: 24),
          Text(
            'Custom Orders',
            style: AppFont.blackText.copyWith(
              fontSize: 16,
              fontWeight: semiBold,
            ),
          ),
          const SizedBox(height: 10),
          Text(
            'Sugar',
            style: AppFont.blackText.copyWith(
              fontSize: 14,
              fontWeight: medium,
            ),
          ),
          Divider(
            color: AppColor.grey.withOpacity(0.5),
          ),
          Column(
            children: [
              buildSugarOption('20%'),
              buildSugarOption('50%'),
              buildSugarOption('70%'),
            ],
          ),
          const SizedBox(height: 8),
          Text(
            'Boba',
            style: AppFont.blackText.copyWith(
              fontSize: 14,
              fontWeight: medium,
            ),
          ),
          Divider(
            color: AppColor.grey.withOpacity(0.5),
          ),
          Column(
            children: [
              buildBobaOption('Yes'),
              buildBobaOption('No'),
            ],
          ),
        ],
      ),
      bottomNavigationBar: Container(
        color: AppColor.white,
        height: 56,
        padding: const EdgeInsets.symmetric(
          vertical: 8,
          horizontal: 12,
        ),
        child: Row(
          children: [
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(
                    'Price',
                    style: AppFont.blackText.copyWith(),
                  ),
                  Text(
                    '\$ ${calculatePrice().toStringAsFixed(2)}',
                    style: AppFont.blackText.copyWith(
                      fontSize: 16,
                      fontWeight: semiBold,
                    ),
                  ),
                ],
              ),
            ),
            Expanded(
              child: CustomButtonGradient(
                onPressed: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (context) => OrderPage(
                        drink: widget.drink,
                        totalItemPrice: calculatePrice(),
                      ),
                    ),
                  );
                },
                text: 'Buy Now',
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget buildSizeOption(String size) {
    bool isSelected = selectedSize == size;

    return GestureDetector(
      onTap: () {
        setState(() {
          selectedSize = size;
        });
      },
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 36, vertical: 8),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(10),
          color: isSelected ? const Color(0xffDAE8F0) : Colors.white,
          border: Border.all(
            color: isSelected ? Colors.black : Colors.grey,
            width: 1,
          ),
        ),
        child: Text(
          size,
          style: TextStyle(
            fontSize: 16,
            fontWeight: FontWeight.w600,
            color: isSelected ? Colors.black : Colors.grey,
          ),
        ),
      ),
    );
  }

  Widget buildSugarOption(String sugarPercentage) {
    bool isSelected = selectedSugar == sugarPercentage;

    return GestureDetector(
      onTap: () {
        setState(() {
          selectedSugar = sugarPercentage;
        });
      },
      child: Padding(
        padding: const EdgeInsets.symmetric(
          vertical: 4,
          horizontal: 8,
        ),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Text(
              sugarPercentage,
              style: AppFont.blackText.copyWith(
                fontSize: 14,
                fontWeight: FontWeight.w500,
              ),
            ),
            Container(
              width: 24,
              height: 24,
              decoration: BoxDecoration(
                color: const Color(0xffD9D9D9),
                borderRadius: BorderRadius.circular(6),
              ),
              child: isSelected
                  ? const Icon(
                      Icons.check,
                      size: 18,
                      color: Colors.black,
                    )
                  : null,
            ),
          ],
        ),
      ),
    );
  }

  Widget buildBobaOption(String option) {
    bool isSelected = option == 'Yes' ? bobaOption : !bobaOption;

    return GestureDetector(
      onTap: () {
        setState(() {
          bobaOption = option == 'Yes';
        });
      },
      child: Padding(
        padding: const EdgeInsets.symmetric(
          vertical: 4,
          horizontal: 8,
        ),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Text(
              option,
              style: AppFont.blackText.copyWith(
                fontSize: 14,
                fontWeight: FontWeight.w500,
              ),
            ),
            Container(
              width: 24,
              height: 24,
              decoration: BoxDecoration(
                color: const Color(0xffD9D9D9),
                borderRadius: BorderRadius.circular(6),
              ),
              child: isSelected
                  ? const Icon(
                      Icons.check,
                      size: 18,
                      color: Colors.black,
                    )
                  : null,
            ),
          ],
        ),
      ),
    );
  }
}
