import 'package:flutter/material.dart';

void main() =>runApp(MyApp());


class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Mi Primer Proyecto'),
        ),
        body: Center(
          child: MyWidget(),
        ),
      ),
    );
  }
}

class MyWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: () {
        print('¡Hola Mundo!');
      },
      child: Text('Haz click para imprimir: ¡Hola Mundo!-'),
    );
  }
}
