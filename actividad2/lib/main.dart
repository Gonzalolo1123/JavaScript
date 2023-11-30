import 'dart:html';
import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Sedes Universidad de Los Lagos'),
          foregroundColor: Colors.black,
          backgroundColor: Colors.white,
        ),
        body: SingleChildScrollView(
        child:Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              MyCardOsorno(),
              MyCardPto(),
              MyCardChiloe(),
              SizedBox(height: 20),
              MyWidget(),
            ],
          ),
        ),
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
        _launchURL('https://www.ulagos.cl');
      },
      child: Text('Mas Información'),
    );
  }
}

class MyCardOsorno extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 4.0,
      margin: EdgeInsets.all(16.0),
      child: Column(
        children: [
          Image.asset(
            '../assets/sede_osorno.png',
            ),
          Padding(
            padding: const EdgeInsets.all(16.0),
            child: Text(
              'Ulagos Sede Osorno',
              style: TextStyle(fontSize: 16.0),
            ),
          ),
        ],
      ),
    );
  }
}

class MyCardPto extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 4.0,
      margin: EdgeInsets.all(16.0),
      child: Column(
        children: [
          Image.asset(
            '../assets/sede_pto.png',
            ),
          Padding(
            padding: const EdgeInsets.all(16.0),
            child: Text(
              'Ulagos Sede Puerto Montt',
              style: TextStyle(fontSize: 16.0),
            ),
          ),
        ],
      ),
    );
  }
}

class MyCardChiloe extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 4.0,
      margin: EdgeInsets.all(16.0),
      child: Column(
        children: [
          Image.asset(
            '../assets/sede_chiloe.png',
          ),
          Padding(
            padding: const EdgeInsets.all(16.0),
            child: Text(
              'Ulagos Sede Chiloé',
              style: TextStyle(fontSize: 16.0),
            ),
          ),
        ],
      ),
    );
  }
}


void _launchURL(String url) async {
  if (await canLaunch(url)) {
    await launch(url);
  } else {
    throw 'Could not launch $url';
  }
}
