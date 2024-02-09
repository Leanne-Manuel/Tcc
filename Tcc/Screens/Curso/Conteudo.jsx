import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";

// Substitua os 'require' pelos caminhos corretos das suas imagens
const conteudos = [
    {
        id: "1",
        tipo: "materia",
        titulo: "Introdução à Educação Financeira",
        conteudo: [
          {
            tipo: "paragrafo",
            texto: "A educação financeira é a chave para uma vida financeira saudável. Entender os princípios básicos de como gerir suas finanças pode ajudá-lo a tomar decisões mais informadas, economizar mais dinheiro e investir de forma inteligente para o futuro."
          },
          {
            tipo: "video",
            uri: "https://exemplo-de-url-para-video.com/video-introducao",
            descricao: "Assista ao vídeo introdutório sobre educação financeira."
          },
          {
            tipo: "dica",
            texto: "Dica: Comece por acompanhar seus gastos mensais para entender melhor para onde vai o seu dinheiro."
          }
        ],
        imagemUri: require("../../assets/Jogos.png"),
    },
    
  {
    id: "2",
    tipo: "quiz",
    titulo: "Quiz: Introdução",
    perguntas: [
      {
        pergunta: "Qual é o primeiro passo para gerir suas finanças pessoais?",
        opcoes: [
          "Fazer um empréstimo",
          "Criar um orçamento",
          "Gastar tudo e economizar depois",
        ],
        respostaCorreta: "Criar um orçamento",
      },
    ],
  },
  {
    id: "3",
    tipo: "materia",
    titulo: "Introdução à Educação Financeira",
    conteudo: [
      {
        tipo: "paragrafo",
        texto: "A educação financeira é a chave para uma vida financeira saudável. Entender os princípios básicos de como gerir suas finanças pode ajudá-lo a tomar decisões mais informadas, economizar mais dinheiro e investir de forma inteligente para o futuro."
      },
      {
        tipo: "video",
        uri: "https://exemplo-de-url-para-video.com/video-introducao",
        descricao: "Assista ao vídeo introdutório sobre educação financeira."
      },
      {
        tipo: "dica",
        texto: "Dica: Comece por acompanhar seus gastos mensais para entender melhor para onde vai o seu dinheiro."
      }
    ],
    imagemUri: require("../../assets/Exames.png"),
},
  {
    id: "4",
    tipo: "quiz",
    titulo: "Quiz: Introdução",
    perguntas: [
      {
        pergunta: "Qual é o primeiro passo para gerir suas finanças pessoais?",
        opcoes: [
          "Fazer um empréstimo",
          "Criar um orçamento",
          "Gastar tudo e economizar depois",
        ],
        respostaCorreta: "Criar um orçamento",
      },
    ],
  },
  // Adicione mais conteúdos conforme necessário
];

const Conteudo = () => {
    const [indexAtual, setIndexAtual] = useState(0);
    const [respostaSelecionada, setRespostaSelecionada] = useState("");
  
    const conteudoAtual = conteudos[indexAtual];
  
    const avancarConteudo = () => {
      setRespostaSelecionada("");
      if (indexAtual < conteudos.length - 1) {
        setIndexAtual(indexAtual + 1);
      } else {
        Alert.alert("Parabéns", "Você completou todas as aulas!"); // Ação ao concluir todas as aulas
      }
    };
  
    const voltarConteudo = () => {
      setRespostaSelecionada("");
      if (indexAtual > 0) {
        setIndexAtual(indexAtual - 1);
      }
    };
  
    const responderQuiz = (opcao, respostaCorreta) => {
      setRespostaSelecionada(opcao);
      if (opcao === respostaCorreta) {
        Alert.alert("Correto!", "Você acertou a resposta.");
      } else {
        Alert.alert("Incorreto", "Tente novamente.");
      }
    };
  
  const renderConteudo = () => {
    if (conteudoAtual.tipo === "materia") {
      return (
        <View>
        <Image source={conteudoAtual.imagemUri} style={styles.imagem} />
        <Text style={styles.titulo}>{conteudoAtual.titulo}</Text>
        {conteudoAtual.conteudo.map((item, index) => {
          switch (item.tipo) {
            case 'paragrafo':
              return <Text key={index} style={styles.paragrafo}>{item.texto}</Text>;
            case 'video':
              return (
                <View key={index} style={styles.videoContainer}>
                  {/* Exemplo de integração de vídeo - substitua por seu componente de vídeo */}
                  <Text style={styles.videoDescricao}>{item.descricao}</Text>
                  {/* Você pode usar uma biblioteca como react-native-video ou uma WebView para vídeos do YouTube */}
                </View>
              );
            case 'dica':
              return <Text key={index} style={styles.dica}>{item.texto}</Text>;
            default:
              return null;
          }
        })}
      </View>
      
      );
    } else if (conteudoAtual.tipo === "quiz") {
      return (
        <View>
          <Text style={styles.titulo}>{conteudoAtual.titulo}</Text>
          {conteudoAtual.perguntas.map((pergunta, index) => (
            <View key={index}>
              <Text style={styles.quizPergunta}>{pergunta.pergunta}</Text>
              {pergunta.opcoes.map((opcao, idx) => (
                <Button
                  key={idx}
                  title={opcao}
                  onPress={() => responderQuiz(opcao, pergunta.respostaCorreta)}
                />
              ))}
            </View>
          ))}
        </View>
      );
    }
  };

  return (
    <ScrollView style={styles.container}>
     <View style={styles.progressBarContainer}>
        {conteudos.map((_, index) => (
          <View
            key={index}
            style={[
              styles.progressBarItem,
              index < indexAtual
                ? styles.progressBarItemCompleted
                : styles.progressBarItem,
            ]}
          />
        ))}
      </View>

      {renderConteudo()}

      <View style={styles.botoesContainer}>
        <TouchableOpacity
          onPress={voltarConteudo}
          disabled={indexAtual === 0}
          style={[styles.botao, indexAtual === 0 && styles.botaoDesativado]}
        >
          <Text style={styles.botaoTexto}>Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={avancarConteudo}
          style={styles.botaoAvancar}
        >
          <Text style={styles.botaoTexto}>{indexAtual >= conteudos.length - 1 ? "Concluir" : "Avançar"}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  progressBarContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  progressBarItem: {
    flex: 1,
    height: 5,
    backgroundColor: "#e0e0e0",
    marginHorizontal: 2,
  },
  progressBarItemCompleted: {
    backgroundColor: "#4caf50",
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  conteudo: {
    fontSize: 16,
    marginBottom: 20,
  },
  imagem: {
    width: "100%",
    height: 200,
    marginBottom: 20,
  },
  quizPergunta: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  botoesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  botao: {
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498db',
  },
  botaoDesativado: {
    backgroundColor: '#cccccc',
  },
  botaoAvancar: {
    backgroundColor: '#4caf50',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoTexto: {
    color: 'white',
    fontSize: 16,
  },
  dica: {
    fontSize: 16,
    fontStyle: 'italic',
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
});

export default Conteudo;
