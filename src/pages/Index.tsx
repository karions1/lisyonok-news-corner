
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, BookOpen, Heart, Dumbbell, Palette, Cat, Wrench, Smile, GraduationCap } from 'lucide-react';

const categories = [
  { name: 'Досуг', slug: 'досуг', icon: Heart, color: 'bg-kidsPink' },
  { name: 'Все для родителей', slug: 'родители', icon: User, color: 'bg-kidsAccent' },
  { name: 'Здоровье', slug: 'здоровье', icon: Heart, color: 'bg-kidsGreen' },
  { name: 'Учёба', slug: 'учёба', icon: BookOpen, color: 'bg-kidsPrimary' },
  { name: 'Спорт', slug: 'спорт', icon: Dumbbell, color: 'bg-kidsSecondary' },
  { name: 'Творчество', slug: 'творчество', icon: Palette, color: 'bg-kidsYellow' },
  { name: 'Животные', slug: 'животные', icon: Cat, color: 'bg-kidsPurple' },
  { name: 'Сделай сам', slug: 'сделай-сам', icon: Wrench, color: 'bg-kidsOrange' },
  { name: 'Шутки', slug: 'шутки', icon: Smile, color: 'bg-kidsPink' },
  { name: 'Детская неделя в классе', slug: 'класс', icon: GraduationCap, color: 'bg-kidsAccent' },
];

const foxActivities = [
  {
    title: 'Лисёнок занимается спортом',
    category: 'спорт',
    image: '🏃‍♂️',
    description: 'Узнай, как Лисёнок стал чемпионом!',
    color: 'bg-kidsSecondary'
  },
  {
    title: 'Лисёнок учится',
    category: 'учёба', 
    image: '📚',
    description: 'Школьные приключения нашего героя',
    color: 'bg-kidsPrimary'
  },
  {
    title: 'Лисёнок шутит',
    category: 'шутки',
    image: '😄',
    description: 'Самые смешные истории и загадки',
    color: 'bg-kidsPink'
  },
  {
    title: 'Лисёнок творит',
    category: 'творчество',
    image: '🎨',
    description: 'Творческие мастер-классы и идеи',
    color: 'bg-kidsYellow'
  }
];

const Index = () => {
  const [activeTab, setActiveTab] = useState('fox-activities');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-kidsPrimary">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-6xl animate-bounce-gentle">🦊</div>
              <div>
                <h1 className="text-4xl font-bold text-kidsPrimary">КидсВик</h1>
                <p className="text-lg text-gray-600">Детские новости и приключения</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="text-kidsPrimary font-semibold hover:text-kidsSecondary transition-colors">
                Главная
              </Link>
              <Link to="/categories" className="text-gray-600 hover:text-kidsPrimary transition-colors">
                Категории
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-kidsPrimary transition-colors">
                О нас
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-4 animate-float">
            Добро пожаловать в мир приключений! 
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Интересные истории, полезные советы и веселые приключения вместе с Лисёнком
          </p>
          <div className="animate-wiggle inline-block text-8xl">🌟</div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12 bg-white/50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Выбери свою категорию
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Link 
                  key={category.slug}
                  to={`/category/${category.slug}`}
                  className="group"
                >
                  <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 hover:border-kidsPrimary">
                    <CardContent className="p-6 text-center">
                      <div className={`${category.color} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce-gentle`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-bold text-gray-800 text-sm leading-tight">
                        {category.name}
                      </h4>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fox Activities Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Непосредственно в...
            </h3>
            <div className="flex justify-center">
              <div className="bg-white rounded-full px-8 py-2 shadow-lg border-2 border-kidsPrimary">
                <span className="text-kidsPrimary font-bold">Приключения Лисёнка</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {foxActivities.map((activity, index) => (
              <Link 
                key={index}
                to={`/category/${activity.category}`}
                className="group"
              >
                <Card className="hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden border-2 hover:border-kidsPrimary">
                  <CardContent className="p-0">
                    <div className={`${activity.color} h-32 flex items-center justify-center text-6xl group-hover:animate-wiggle`}>
                      {activity.image}
                    </div>
                    <div className="p-6">
                      <h4 className="font-bold text-lg text-gray-800 mb-2">
                        {activity.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {activity.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-12 bg-gradient-to-r from-kidsPrimary/10 to-kidsSecondary/10">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Последние новости
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Sample news cards */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Badge variant="secondary" className="bg-kidsSecondary text-white">
                    Спорт
                  </Badge>
                  <div className="ml-auto flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    24 июня
                  </div>
                </div>
                <h4 className="font-bold text-lg mb-2">
                  Лисёнок на велосипеде
                </h4>
                <p className="text-gray-600 text-sm">
                  Узнай, как Лисёнок научился кататься на велосипеде и какие приключения его ждали!
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Badge variant="secondary" className="bg-kidsPrimary text-white">
                    Учёба
                  </Badge>
                  <div className="ml-auto flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    20 июня
                  </div>
                </div>
                <h4 className="font-bold text-lg mb-2">
                  Первый день в школе
                </h4>
                <p className="text-gray-600 text-sm">
                  Волнительная история о том, как Лисёнок готовился к школе и что произошло в его первый учебный день.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Badge variant="secondary" className="bg-kidsYellow text-gray-800">
                    Творчество
                  </Badge>
                  <div className="ml-auto flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    22 июня
                  </div>
                </div>
                <h4 className="font-bold text-lg mb-2">
                  Рисуем радугу
                </h4>
                <p className="text-gray-600 text-sm">
                  Мастер-класс от Лисёнка: как нарисовать красивую радугу и создать солнечное настроение!
                </p>
              </CardContent>
            </Card>
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
          <div className="flex justify-center space-x-6">
            <Link to="/about" className="hover:text-kidsPrimary transition-colors">
              О нас
            </Link>
            <Link to="/contact" className="hover:text-kidsPrimary transition-colors">
              Контакты
            </Link>
            <Link to="/privacy" className="hover:text-kidsPrimary transition-colors">
              Конфиденциальность
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
