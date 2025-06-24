
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowLeft } from 'lucide-react';

// Mock data для примера - в реальности будет загружаться из Contentlayer
const mockPosts = {
  'спорт': [
    {
      slug: 'sport-fox-adventure',
      title: 'Лисёнок на велосипеде: Весёлая прогулка по парку',
      excerpt: 'Узнай, как Лисёнок научился кататься на велосипеде и какие приключения его ждали!',
      date: '2024-06-24',
      author: 'Редакция КидсВик',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=200&fit=crop'
    }
  ],
  'учёба': [
    {
      slug: 'study-fox-school',
      title: 'Лисёнок идёт в школу: Первый день в первом классе',
      excerpt: 'Волнительная история о том, как Лисёнок готовился к школе и что произошло в его первый учебный день.',
      date: '2024-06-20',
      author: 'Анна Волкова',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop'
    }
  ],
  'творчество': [
    {
      slug: 'creative-fox-art',
      title: 'Лисёнок-художник: Рисуем радугу после дождя',
      excerpt: 'Мастер-класс от Лисёнка: как нарисовать красивую радугу и создать солнечное настроение!',
      date: '2024-06-22',
      author: 'Мария Рисовалкина',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=200&fit=crop'
    }
  ],
  'шутки': [
    {
      slug: 'jokes-fox-funny',
      title: 'Лисёнок-шутник: Самые смешные загадки и анекдоты',
      excerpt: 'Сборник весёлых шуток и загадок от Лисёнка, которые заставят вас смеяться до слёз!',
      date: '2024-06-23',
      author: 'Весёлый Лисёнок',
      image: 'https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?w=400&h=200&fit=crop'
    }
  ]
};

const categoryColors = {
  'спорт': 'bg-kidsSecondary',
  'учёба': 'bg-kidsPrimary', 
  'творчество': 'bg-kidsYellow',
  'шутки': 'bg-kidsPink',
  'досуг': 'bg-kidsPink',
  'родители': 'bg-kidsAccent',
  'здоровье': 'bg-kidsGreen',
  'животные': 'bg-kidsPurple',
  'сделай-сам': 'bg-kidsOrange',
  'класс': 'bg-kidsAccent'
};

const categoryEmojis = {
  'спорт': '🏃‍♂️',
  'учёба': '📚',
  'творчество': '🎨',
  'шутки': '😄',
  'досуг': '🎮',
  'родители': '👨‍👩‍👧‍👦',
  'здоровье': '🏥',
  'животные': '🐱',
  'сделай-сам': '🔧',
  'класс': '🎓'
};

const Category = () => {
  const { category } = useParams<{ category: string }>();
  const posts = category ? mockPosts[category as keyof typeof mockPosts] || [] : [];
  const categoryColor = category ? categoryColors[category as keyof typeof categoryColors] : 'bg-kidsPrimary';
  const categoryEmoji = category ? categoryEmojis[category as keyof typeof categoryEmojis] : '📰';

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-kidsPrimary">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-4 hover:opacity-80 transition-opacity">
              <div className="text-4xl animate-bounce-gentle">🦊</div>
              <div>
                <h1 className="text-2xl font-bold text-kidsPrimary">КидсВик</h1>
              </div>
            </Link>
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-gray-600 hover:text-kidsPrimary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>На главную</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Category Hero */}
      <section className={`${categoryColor} py-12`}>
        <div className="container mx-auto px-4 text-center">
          <div className="text-8xl mb-4 animate-float">{categoryEmoji}</div>
          <h2 className="text-4xl font-bold text-white mb-4 capitalize">
            {category}
          </h2>
          <p className="text-xl text-white/90">
            Все самое интересное в категории "{category}"
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <Link key={post.slug} to={`/posts/${post.slug}`} className="group">
                  <Card className="hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden border-2 hover:border-kidsPrimary">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <Badge className={`${categoryColor} text-white border-0`}>
                          {category}
                        </Badge>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.date).toLocaleDateString('ru-RU', {
                            day: 'numeric',
                            month: 'long'
                          })}
                        </div>
                      </div>
                      
                      <h3 className="font-bold text-xl mb-3 text-gray-800 group-hover:text-kidsPrimary transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-600 mb-2">
                Скоро здесь появятся новости!
              </h3>
              <p className="text-gray-500">
                Лисёнок уже работает над интересными материалами для этой категории
              </p>
              <Link 
                to="/" 
                className="inline-block mt-6 bg-kidsPrimary text-white px-6 py-3 rounded-lg hover:bg-kidsPrimary/80 transition-colors"
              >
                Вернуться на главную
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Related Categories */}
      <section className="py-12 bg-white/50">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
            Другие категории
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {Object.keys(categoryEmojis).filter(cat => cat !== category).slice(0, 5).map(cat => (
              <Link 
                key={cat}
                to={`/category/${cat}`}
                className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 hover:border-kidsPrimary"
              >
                <span className="text-2xl">{categoryEmojis[cat as keyof typeof categoryEmojis]}</span>
                <span className="font-semibold text-gray-700 capitalize">{cat}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="text-4xl mb-4">🦊</div>
          <h4 className="text-2xl font-bold mb-2">КидсВик</h4>
          <p className="text-gray-400 mb-4">
            Детские новости, которые делают мир ярче!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Category;
