import 'package:coffeeshop_app/core/constants/app_font.dart';
import 'package:flutter/material.dart';

class AddressPage extends StatelessWidget {
  const AddressPage({super.key});

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
        title: const Text('My Address'),
        titleTextStyle: AppFont.blackText.copyWith(
          fontSize: 18,
          fontWeight: semiBold,
        ),
      ),
      body: ListView(
        children: [
          /// Menggunakan LISTTILE
          ListTile(
            title: const Text('Sutanto'),
            subtitle: const Text('Jalan Garuda Jaya No. 45'),
            trailing: PopupMenuButton(
              itemBuilder: (context) {
                return [
                  /// Menggunakan MENU
                  const PopupMenuItem(
                    value: 'edit',
                    child: Text('Edit'),
                  ),
                  const PopupMenuItem(
                    value: 'delete',
                    child: Text('Delete'),
                  )
                ];
              },
              onSelected: (String value) {},
            ),
          ),
          ListTile(
            title: const Text('Suwantini'),
            subtitle: const Text('Jalan Merpati Putih No.98'),
            trailing: PopupMenuButton(
              itemBuilder: (context) {
                return [
                  const PopupMenuItem(
                    value: 'edit',
                    child: Text('Edit'),
                  ),
                  const PopupMenuItem(
                    value: 'delete',
                    child: Text('Delete'),
                  )
                ];
              },
              onSelected: (String value) {},
            ),
          ),
        ],
      ),
    );
  }
}
