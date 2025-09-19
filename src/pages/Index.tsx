import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="animate-fade-in">
            <img
              src="/img/1ff0b30a-42fa-4138-9189-34cf069dd849.jpg"
              alt="Портрет"
              className="mx-auto h-32 w-32 rounded-full object-cover shadow-lg ring-4 ring-white mb-8"
            />
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
              Привет! Меня зовут
              <span className="text-primary block mt-2">Роман</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              Мне 15 лет. Я умный, позитивный и заботливый человек. Добро пожаловать на мой персональный сайт!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="min-w-[160px]">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Связаться
              </Button>
              <Button variant="outline" size="lg" className="min-w-[160px]">
                <Icon name="Download" size={20} className="mr-2" />
                Скачать резюме
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-16 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Обо мне</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="animate-scale-in">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  <Icon name="User" size={24} className="inline mr-3 text-primary" />
                  Личная информация
                </h3>
                <div className="space-y-3 text-gray-600 leading-relaxed">
                  <p><span className="font-medium">Возраст:</span> 15 лет</p>
                  <p><span className="font-medium">Характер:</span> Умный, позитивный, заботливый</p>
                  <p><span className="font-medium">Хобби:</span> Футбол, чтение, общение с друзьями</p>
                  <p><span className="font-medium">Цели:</span> Развитие личности и получение качественного образования</p>
                </div>
              </div>

              <div className="animate-scale-in">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  <Icon name="Target" size={24} className="inline mr-3 text-primary" />
                  Мои качества
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Умный", icon: "Brain" },
                    { label: "Позитивный", icon: "Sun" },
                    { label: "Заботливый", icon: "Heart" },
                    { label: "Общительный", icon: "Users" }
                  ].map((quality, index) => (
                    <div
                      key={index}
                      className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <Icon name={quality.icon as any} size={18} className="text-primary mr-2" />
                      <span className="text-sm font-medium text-gray-700">{quality.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="p-6 shadow-lg border-0 bg-gradient-to-br from-primary/5 to-primary/10">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-primary/20 rounded-full mr-4">
                      <Icon name="Trophy" size={28} className="text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">Мои увлечения</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Я разносторонняя личность с множеством интересов. Люблю футбол, 
                    читать интересные книги и проводить время с друзьями.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Icon name="MapPin" size={18} className="text-primary mr-3" />
                      <span className="text-gray-600">Играю в футбол 2 раза в неделю</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="BookOpen" size={18} className="text-primary mr-3" />
                      <span className="text-gray-600">Люблю читать книги</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="Users" size={18} className="text-primary mr-3" />
                      <span className="text-gray-600">Общение с друзьями</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: "Brain", label: "Интеллект", color: "text-blue-500" },
                  { icon: "Sun", label: "Позитив", color: "text-yellow-500" },
                  { icon: "Heart", label: "Забота", color: "text-red-500" }
                ].map((trait, index) => (
                  <Card key={index} className="p-4 text-center hover:shadow-md transition-shadow">
                    <CardContent className="p-0">
                      <Icon name={trait.icon as any} size={32} className={`mx-auto mb-2 ${trait.color}`} />
                      <p className="text-sm font-medium text-gray-700">{trait.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="flex justify-center space-x-6 mb-8">
            {[
              { icon: "Instagram", label: "Instagram" },
              { icon: "MessageCircle", label: "Telegram" },
              { icon: "Mail", label: "Email" }
            ].map((social, index) => (
              <button
                key={index}
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors group"
              >
                <Icon name={social.icon as any} size={20} className="text-gray-300 group-hover:text-white" />
              </button>
            ))}
          </div>
          
          <h3 className="text-2xl font-bold mb-2">Роман</h3>
          <p className="text-gray-400 mb-6">Умный и позитивный подросток с большими планами</p>
          
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500 text-sm">© 2024 Роман</p>
          </div>
        </div>
      </footer>
    </div>
  );
}