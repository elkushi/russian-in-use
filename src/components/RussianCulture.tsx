import { Card, CardContent, CardHeader, CardTitle } from "./ui/card-simple";
import { Badge } from "./ui/badge-simple";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs-simple";
import { Button } from "./ui/button-simple";
import { 
  Heart, 
  Home, 
  Coffee, 
  MapPin,
  Clock,
  Users,
  Star,
  Play,
  Volume2
} from "./ui/icons-simple";

// Simple inline icons for the remaining ones
const Film = () => <span className="text-lg">🎬</span>;
const Music = () => <span className="text-lg">🎵</span>;
const Smile = () => <span className="text-lg">😊</span>;
const MessageSquare = () => <span className="text-lg">💬</span>;

export function RussianCulture() {
  const survivalSkills = [
    {
      category: "Transportation",
      icon: MapPin,
      tips: [
        "Learn metro station names in Cyrillic",
        "Always carry cash - not all places accept cards",
        "Download Yandex.Maps for navigation",
        "Know basic phrases: 'Где остановка?' (Where's the stop?)"
      ]
    },
    {
      category: "Shopping & Services",
      icon: Coffee,
      tips: [
        "Grocery stores: Магнит, Пятёрочка, Перекрёсток",
        "Bring your own bag - plastic bags cost extra",
        "Learn numbers for prices and quantities",
        "Tipping is usually 10% at restaurants"
      ]
    },
    {
      category: "Social Etiquette",
      icon: Users,
      tips: [
        "Remove shoes when entering homes",
        "Shake hands with everyone when introduced",
        "Never shake hands over a threshold",
        "Bring odd number of flowers as gifts"
      ]
    },
    {
      category: "Daily Life",
      icon: Home,
      tips: [
        "Apartments often have coded entry systems",
        "Hot water might be shut off in summer",
        "Keep documents with you always",
        "Learn your address in Russian and English"
      ]
    }
  ];

  const childhoodMovies = [
    {
      title: "Три богатыря",
      englishTitle: "Three Bogatyrs",
      year: "2004-ongoing",
      description: "Animated series about three Russian folk heroes",
      culturalNote: "Modern take on ancient Slavic legends"
    },
    {
      title: "Ну, погоди!",
      englishTitle: "Well, Just You Wait!",
      year: "1969-1993",
      description: "Soviet animated series with Wolf and Hare",
      culturalNote: "Russia's equivalent to Tom & Jerry"
    },
    {
      title: "Винни-Пух",
      englishTitle: "Winnie-the-Pooh",
      year: "1969-1972",
      description: "Soviet version of Winnie the Pooh",
      culturalNote: "Different from Disney version, more philosophical"
    },
    {
      title: "Чебурашка",
      englishTitle: "Cheburashka",
      year: "1969-1983",
      description: "Adventures of Cheburashka and Crocodile Gena",
      culturalNote: "National cultural symbol of Russia"
    }
  ];

  const popularSongs = [
    {
      title: "Катюша",
      artist: "Folk song",
      era: "WWII era",
      significance: "Most famous Russian wartime song",
      lyrics: "Расцветали яблони и груши..."
    },
    {
      title: "Миллион алых роз",
      artist: "Алла Пугачёва",
      era: "Soviet pop",
      significance: "Classic romantic ballad everyone knows",
      lyrics: "Миллион, миллион, миллион алых роз..."
    },
    {
      title: "Подмосковные вечера",
      artist: "Traditional",
      era: "1950s",
      significance: "Moscow's unofficial anthem",
      lyrics: "Не слышны в саду даже шорохи..."
    },
    {
      title: "Песенка о медведях",
      artist: "From 'Кавказская пленница'",
      era: "Soviet cinema",
      significance: "Comedy film classic",
      lyrics: "Где-то на белом свете..."
    }
  ];

  const internetMemes = [
    {
      phrase: "Превед медвед",
      meaning: "Hello bear",
      origin: "Internet meme from 2006",
      usage: "Greeting, now considered outdated but still recognized"
    },
    {
      phrase: "Аффтар жжот",
      meaning: "Author rocks/burns",
      origin: "Forum slang for 'great post'",
      usage: "Praise for good content (intentional misspelling)"
    },
    {
      phrase: "Ололо",
      meaning: "Expression of excitement/laughter",
      origin: "Gaming community",
      usage: "Similar to 'lol' but more enthusiastic"
    },
    {
      phrase: "Зачот",
      meaning: "Passed/approved",
      origin: "Student slang from 'зачёт'",
      usage: "Something good/acceptable"
    }
  ];

  const modernSlang = [
    {
      word: "Крутой",
      pronunciation: "KROO-toy",
      meaning: "Cool, awesome",
      example: "Это крутая машина! (That's a cool car!)"
    },
    {
      word: "Отстой",
      pronunciation: "at-STOY",
      meaning: "Sucks, lame",
      example: "Этот фильм отстой (This movie sucks)"
    },
    {
      word: "Тусить",
      pronunciation: "tu-SEET'",
      meaning: "To hang out, party",
      example: "Где будем тусить? (Where will we hang out?)"
    },
    {
      word: "Базарить",
      pronunciation: "ba-ZA-rit'",
      meaning: "To talk, chat",
      example: "О чём базарим? (What are we talking about?)"
    },
    {
      word: "Жесть",
      pronunciation: "zhest'",
      meaning: "Wow, intense, crazy",
      example: "Жесть, какая скорость! (Wow, what speed!)"
    },
    {
      word: "Чилить",
      pronunciation: "CHEE-lit'",
      meaning: "To chill, relax",
      example: "Просто чилю дома (Just chilling at home)"
    }
  ];

  return (
    <section id="culture" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Beyond Language: Living in Russia 🇷🇺
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Master not just the language, but the culture. From survival skills to childhood nostalgia, 
            internet memes to modern slang - become truly integrated into Russian society.
          </p>
        </div>

        <Tabs defaultValue="survival" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
            <TabsTrigger value="survival" className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span className="hidden sm:inline">Survival</span>
            </TabsTrigger>
            <TabsTrigger value="movies" className="flex items-center gap-2">
              <Film className="w-4 h-4" />
              <span className="hidden sm:inline">Movies</span>
            </TabsTrigger>
            <TabsTrigger value="music" className="flex items-center gap-2">
              <Music className="w-4 h-4" />
              <span className="hidden sm:inline">Music</span>
            </TabsTrigger>
            <TabsTrigger value="memes" className="flex items-center gap-2">
              <Smile className="w-4 h-4" />
              <span className="hidden sm:inline">Memes</span>
            </TabsTrigger>
            <TabsTrigger value="slang" className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              <span className="hidden sm:inline">Slang</span>
            </TabsTrigger>
          </TabsList>

          {/* Survival Skills */}
          <TabsContent value="survival">
            <div className="grid md:grid-cols-2 gap-6">
              {survivalSkills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-red-600" />
                        </div>
                        {skill.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {skill.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          {/* Childhood Movies & Cartoons */}
          <TabsContent value="movies">
            <div className="grid md:grid-cols-2 gap-6">
              {childhoodMovies.map((movie, index) => (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-bold text-lg text-foreground">{movie.title}</h3>
                        <p className="text-sm text-muted-foreground italic">{movie.englishTitle}</p>
                      </div>
                      <Badge variant="secondary">{movie.year}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{movie.description}</p>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                      <p className="text-xs text-red-700">
                        <strong>Cultural Note:</strong> {movie.culturalNote}
                      </p>
                    </div>
                    <Button size="sm" variant="outline" className="mt-3 w-full">
                      <Play className="w-4 h-4 mr-2" />
                      Watch Trailer
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Popular Songs */}
          <TabsContent value="music">
            <div className="grid md:grid-cols-2 gap-6">
              {popularSongs.map((song, index) => (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-bold text-lg text-foreground">{song.title}</h3>
                        <p className="text-sm text-muted-foreground">{song.artist}</p>
                      </div>
                      <Badge variant="secondary">{song.era}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{song.significance}</p>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3">
                      <p className="text-sm text-blue-800 font-medium">Sample lyrics:</p>
                      <p className="text-sm text-blue-700 italic">{song.lyrics}</p>
                    </div>
                    <Button size="sm" variant="outline" className="w-full">
                      <Volume2 className="w-4 h-4 mr-2" />
                      Listen Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Internet Memes */}
          <TabsContent value="memes">
            <div className="grid md:grid-cols-2 gap-6">
              {internetMemes.map((meme, index) => (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-foreground mb-2">{meme.phrase}</h3>
                    <p className="text-sm text-muted-foreground mb-3 italic">{meme.meaning}</p>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-3">
                      <p className="text-xs text-yellow-700">
                        <strong>Origin:</strong> {meme.origin}
                      </p>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      <strong>Usage:</strong> {meme.usage}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Modern Slang */}
          <TabsContent value="slang">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {modernSlang.map((slang, index) => (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-foreground">{slang.word}</h3>
                      <Badge variant="outline" className="text-xs">Slang</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">[{slang.pronunciation}]</p>
                    <p className="text-sm text-muted-foreground mb-3">{slang.meaning}</p>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-2">
                      <p className="text-xs text-green-700">{slang.example}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Bottom CTA */}
        <div className="text-center mt-16 bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 text-white">
          <Heart className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Ready to Embrace Russian Culture?</h3>
          <p className="text-red-100 mb-6 max-w-2xl mx-auto">
            Language is just the beginning. Our culture modules are integrated into every lesson, 
            so you'll learn not just what to say, but when and how to say it like a true Russian.
          </p>
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
            Explore Cultural Lessons
          </Button>
        </div>
      </div>
    </section>
  );
}