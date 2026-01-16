class DrinkModel {
  final String name;
  final String variant;
  final String image;
  final String description;
  final double rating;
  final int numReviews;
  final double price; // Single price attribute

  DrinkModel({
    required this.name,
    required this.variant,
    required this.image,
    required this.description,
    required this.rating,
    required this.numReviews,
    required this.price,
  });
}

List<DrinkModel> drinksData = [
  DrinkModel(
    name: 'Bubble Tea',
    variant: 'Milk Tea',
    image: 'assets/images/product-1.jpg',
    description:
        'Dalam bahasa Italia, Caffe artinya “kopi”, dan Latte adalah “susu”, jadi Caffe Latte artinya kopi susu. Caffe latte atau kopi latte ini merupakan salah satu jenis minuman kopi susu yang populer di samping Cappucino. Sekilas, kedua jenis minuman ini memang mirip, tapi mereka punya takaran dan rasa yang berbeda, loh.',
    rating: 4.5,
    numReviews: 250,
    price: 6.0,
  ),
  DrinkModel(
    name: 'Espresso',
    variant: 'Double Shot',
    image: 'assets/images/product-2.jpg',
    description:
        'Dalam bahasa Italia, Caffe artinya “kopi”, dan Latte adalah “susu”, jadi Caffe Latte artinya kopi susu. Caffe latte atau kopi latte ini merupakan salah satu jenis minuman kopi susu yang populer di samping Cappucino. Sekilas, kedua jenis minuman ini memang mirip, tapi mereka punya takaran dan rasa yang berbeda, loh.',
    rating: 4.2,
    numReviews: 180,
    price: 5.5,
  ),
  DrinkModel(
    name: 'Green Tea',
    variant: 'Matcha Latte',
    image: 'assets/images/product-3.jpg',
    description:
        'Dalam bahasa Italia, Caffe artinya “kopi”, dan Latte adalah “susu”, jadi Caffe Latte artinya kopi susu. Caffe latte atau kopi latte ini merupakan salah satu jenis minuman kopi susu yang populer di samping Cappucino. Sekilas, kedua jenis minuman ini memang mirip, tapi mereka punya takaran dan rasa yang berbeda, loh.',
    rating: 4.8,
    numReviews: 300,
    price: 7.0,
  ),
  DrinkModel(
    name: 'Latte',
    variant: 'Freshly Squeezed',
    image: 'assets/images/product-4.jpg',
    description:
        'Dalam bahasa Italia, Caffe artinya “kopi”, dan Latte adalah “susu”, jadi Caffe Latte artinya kopi susu. Caffe latte atau kopi latte ini merupakan salah satu jenis minuman kopi susu yang populer di samping Cappucino. Sekilas, kedua jenis minuman ini memang mirip, tapi mereka punya takaran dan rasa yang berbeda, loh.',
    rating: 4.0,
    numReviews: 150,
    price: 5.0,
  ),
  DrinkModel(
    name: 'Smoothie',
    variant: 'Mixed Berries',
    image: 'assets/images/product-5.jpg',
    description:
        'Dalam bahasa Italia, Caffe artinya “kopi”, dan Latte adalah “susu”, jadi Caffé Latte artinya kopi susu. Caffé latte atau kopi latte ini merupakan salah satu jenis minuman kopi susu yang populer di samping Cappucino. Sekilas, kedua jenis minuman ini memang mirip, tapi mereka punya takaran dan rasa yang berbeda, loh.',
    rating: 4.6,
    numReviews: 200,
    price: 6.5,
  ),
];
