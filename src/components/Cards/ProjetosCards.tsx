import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Grid, Button } from '@mui/material';

const cardData = [
  {
    id: 1,
    title: "Pokedéx",
    image: "/img/pokedex.png",
    description: "Nesse projeto, consegui praticar o consumo de API, com a API do desenho pokemon que traz todos os personagens e suas caracteristicas.",
  },
  {
    id: 2,
    title: "Dev Burguer",
    image: "/img/devburguer.png",
    description: "Consegui praticar o minhas habilidades de frontend, na realização deste projeto. Um Cadarpio virtual de uma hamburgueria.",
  },
  {
    id: 3,
    title: "Sistema de Gestão - Minikids",
    image: "/static/images/cards/snake.jpg",
    description: "Um sistema bem completo que foi feito para a minha esposa conseguir gerenciar a gestão do seu negócio.",
  },
  {
    id: 4,
    title: "ConnectAll",
    image: "/static/images/cards/snake.jpg",
    description: "Um aplicativo mobile de aluguel de equipamentos, consegui me desenvolver muito em React Native nesse projeto.",
  },
  {
    id: 5,
    title: "Mata-Mosquito",
    image: "/img/matamosquito.png",
    description: "Projeto bem pequeno, que eu fiz para praticar o javascript puro.",
  },
  
];

const CardGrid = () => {
  return (
    <Grid container spacing={2}>
      {cardData.map((card) => (
        <Grid item xs={12} sm={6} md={4} key={card.id}> {/* Tamanho responsivo */}
          <Card sx={{ maxWidth: 345, marginTop: 10, marginLeft: 5, opacity: 0.90 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={card.image}
                alt={card.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {card.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CardGrid;
