import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const data = [
  {
    id: 1,
    title: 'Beautiful Nature',
    imageUrl: 'https://img.freepik.com/premium-photo/beautiful-landscape-based-3d-rendering-illustration_771975-25.jpg?w=2000',
    description: 'This is the Nature.',
  },
  {
    id: 2,
    title: 'Card 2',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRblEBU4J42MegQwU51gaH_XYNBw46fM5648wwaZaLRpPkg4OZToHgP7ZhtZZUfBxO528&usqp=CAU',
    description: 'This is the second card.',
  },
  {
    id: 2,
    title: 'Card 2',
    imageUrl: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_640.jpg',
    description: 'This is the second card.',
  },
  {
    id: 2,
    title: 'Card 2',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRblEBU4J42MegQwU51gaH_XYNBw46fM5648wwaZaLRpPkg4OZToHgP7ZhtZZUfBxO528&usqp=CAU',
    description: 'This is the second card.',
  },
  // Add more data for additional cards
];

const CardData = () => {
  return (
    <ScrollView>
      {data.map((card) => (
        <View style={styles.card} key={card.id}>
          <Image source={{ uri: card.imageUrl }} style={styles.image} />
          <View style={styles.cardContent}>
            <Text style={styles.title}>{card.title}</Text>
            <Text>{card.description}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    elevation: 4, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  cardContent: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CardData;
