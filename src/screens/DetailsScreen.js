import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  SafeAreaView,
  TouchableOpacity 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const DetailsScreen = ({ route }) => {
  const navigation = useNavigation();
  const item = route.params?.item || { 
    title: 'Título não disponível', 
    body: 'Conteúdo não disponível',
    id: null,
    date: '2023-11-15', // Exemplo de campo adicional
    author: 'Autor desconhecido', // Exemplo de campo adicional
    category: 'Geral' // Exemplo de campo adicional
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Cabeçalho com botão de voltar */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#FFF" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Detalhes</Text>
          <View style={styles.headerRight} />
        </View>

        {/* Card principal */}
        <View style={styles.card}>
          {/* Tag de categoria */}
          <View style={styles.categoryTag}>
            <Text style={styles.categoryText}>{item.category}</Text>
          </View>

          {/* Título */}
          <Text style={styles.title}>{item.title}</Text>

          {/* Metadados (autor e data) */}
          <View style={styles.metaContainer}>
            <View style={styles.metaItem}>
              <Ionicons name="person-outline" size={16} color="#6B7280" />
              <Text style={styles.metaText}>{item.author}</Text>
            </View>
            <View style={styles.metaItem}>
              <Ionicons name="calendar-outline" size={16} color="#6B7280" />
              <Text style={styles.metaText}>{item.date}</Text>
            </View>
          </View>

          {/* Corpo do conteúdo */}
          <Text style={styles.body}>{item.body}</Text>

          {/* ID do item (opcional) */}
          {item.id && (
            <View style={styles.idContainer}>
              <Text style={styles.idText}>ID: {item.id}</Text>
            </View>
          )}

          {/* Área de ações */}
          <View style={styles.actionsContainer}>
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="heart-outline" size={20} color="#EF4444" />
              <Text style={styles.actionText}>Favoritar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="share-social-outline" size={20} color="#3B82F6" />
              <Text style={styles.actionText}>Compartilhar</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Seção de informações adicionais (exemplo) */}
        <View style={styles.additionalInfo}>
          <Text style={styles.sectionTitle}>Informações Adicionais</Text>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Status:</Text>
            <Text style={styles.infoValue}>Ativo</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Criado em:</Text>
            <Text style={styles.infoValue}>15/11/2023 10:30</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Tags:</Text>
            <View style={styles.tagsContainer}>
              <View style={styles.tag}>
                <Text style={styles.tagText}>Importante</Text>
              </View>
              <View style={styles.tag}>
                <Text style={styles.tagText}>Atualização</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#4F46E5',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
  },
  backButton: {
    padding: 5,
  },
  headerRight: {
    width: 24, // Para manter o alinhamento
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 20,
    margin: 15,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  categoryTag: {
    alignSelf: 'flex-start',
    backgroundColor: '#E0E7FF',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    marginBottom: 15,
  },
  categoryText: {
    color: '#4F46E5',
    fontSize: 12,
    fontWeight: '600',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 10,
    lineHeight: 28,
  },
  metaContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    flexWrap: 'wrap',
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
    marginBottom: 5,
  },
  metaText: {
    color: '#6B7280',
    fontSize: 14,
    marginLeft: 5,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
    color: '#374151',
    marginBottom: 20,
  },
  idContainer: {
    padding: 10,
    backgroundColor: '#F9FAFB',
    borderRadius: 6,
    marginBottom: 20,
  },
  idText: {
    color: '#6B7280',
    fontSize: 14,
    fontFamily: 'monospace',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingTop: 15,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  actionText: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: '500',
  },
  additionalInfo: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 20,
    marginHorizontal: 15,
    marginTop: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 15,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  infoItem: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  infoLabel: {
    width: 100,
    color: '#6B7280',
    fontSize: 14,
  },
  infoValue: {
    flex: 1,
    color: '#374151',
    fontSize: 14,
    fontWeight: '500',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
  },
  tag: {
    backgroundColor: '#E5E7EB',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
    marginBottom: 8,
  },
  tagText: {
    color: '#4B5563',
    fontSize: 12,
  },
});

export default DetailsScreen;