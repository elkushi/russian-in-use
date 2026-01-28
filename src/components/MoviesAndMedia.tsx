import { Card, CardContent } from "./ui/card-simple";
import { Button } from "./ui/button-simple";
import { Badge } from "./ui/badge-simple";
import { Play, Film, Headphones, Subtitles, Star } from "./ui/icons-simple";

export function MoviesAndMedia() {
  const movies = [
    {
      title: "Ирония судьбы",
      englishTitle: "The Irony of Fate",
      year: "1975",
      level: "B1+",
      genre: "Romantic Comedy",
      rating: 4.8,
      description: "A beloved Soviet classic about New Year's traditions and unexpected romance.",
      culturalNote: "Essential for understanding Russian New Year culture"
    },
    {
      title: "Бриллиантовая рука",
      englishTitle: "The Diamond Arm",
      year: "1968",
      level: "B1",
      genre: "Comedy",
      rating: 4.9,
      description: "Iconic Soviet comedy with memorable phrases still used today.",
      culturalNote: "Full of idiomatic expressions and cultural references"
    },
    {
      title: "Москва слезам не верит",
      englishTitle: "Moscow Does Not Believe in Tears",
      year: "1980",
      level: "B2",
      genre: "Drama",
      rating: 4.7,
      description: "Oscar-winning drama about life, love, and friendship in Soviet Moscow.",
      culturalNote: "Insights into Soviet-era Moscow life and values"
    }
  ];

  const cartoons = [
    { title: "Винни-Пух", english: "Winnie the Pooh", level: "A2", icon: "🐻" },
    { title: "Крокодил Гена", english: "Crocodile Gena", level: "A2", icon: "🐊" },
    { title: "Ну, погоди!", english: "Well, Just You Wait!", level: "B1", icon: "🐺" },
    { title: "Простоквашино", english: "Prostokvashino", level: "B1", icon: "🐱" }
  ];

  const features = [
    {
      icon: Subtitles,
      title: "Dual Subtitles",
      description: "Russian and English subtitles available"
    },
    {
      icon: Headphones,
      title: "Native Audio",
      description: "Original Russian soundtrack for authentic learning"
    },
    {
      icon: Play,
      title: "Adjustable Speed",
      description: "Slow down playback for better comprehension"
    }
  ];

  return (
    <section id="movies-media" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-red-600 text-white mb-4">🎬 Movies & Media</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Learn Russian Through Film
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch classic Russian movies, cartoons, and shows with Russian subtitles. 
            Perfect for B1+ learners to immerse in authentic language and culture.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="border-border text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Movies */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Classic Russian Films</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {movies.map((movie, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="aspect-video bg-gradient-to-br from-red-500 to-red-700 rounded-lg mb-4 flex items-center justify-center">
                    <Film className="w-12 h-12 text-white" />
                  </div>
                  
                  <div className="mb-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-blue-600 text-white">{movie.level}</Badge>
                      <div className="flex items-center text-sm">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        <span className="font-medium">{movie.rating}</span>
                      </div>
                    </div>
                    <h4 className="font-bold text-lg mb-1">{movie.title}</h4>
                    <p className="text-sm text-muted-foreground mb-1">{movie.englishTitle}</p>
                    <p className="text-xs text-muted-foreground">{movie.year} • {movie.genre}</p>
                  </div>

                  <p className="text-sm text-muted-foreground mb-3">{movie.description}</p>

                  <div className="bg-blue-50 rounded-lg p-3 mb-4">
                    <p className="text-xs font-medium text-blue-700">
                      📚 {movie.culturalNote}
                    </p>
                  </div>

                  <Button size="sm" className="w-full bg-red-600 hover:bg-red-700">
                    <Play className="w-4 h-4 mr-2" />
                    Watch Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Childhood Cartoons */}
        <Card className="border-border shadow-lg bg-gradient-to-br from-yellow-50 to-orange-50 mb-16">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-center mb-6">
              Soviet Childhood Cartoons
            </h3>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              These beloved cartoons are part of every Russian's childhood. 
              Learn the phrases and songs that Russians still quote today!
            </p>
            
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              {cartoons.map((cartoon, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white rounded-xl p-6 shadow-md mb-3 hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="text-5xl mb-3">{cartoon.icon}</div>
                    <Badge className="bg-green-600 text-white mb-2">{cartoon.level}</Badge>
                    <h4 className="font-bold text-sm mb-1">{cartoon.title}</h4>
                    <p className="text-xs text-muted-foreground">{cartoon.english}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button className="bg-orange-600 hover:bg-orange-700">
                Browse All Cartoons
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Cultural Content Categories */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-border">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-3xl">🎵</div>
                <div>
                  <h4 className="font-bold">Russian Songs & Music</h4>
                  <p className="text-sm text-muted-foreground">From classics to modern hits</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground mb-4">
                <div>• Soviet classics and folk songs</div>
                <div>• Modern Russian pop and rock</div>
                <div>• Lyrics with translations</div>
                <div>• Singalong practice sessions</div>
              </div>
              <Button variant="outline" className="w-full">
                Explore Music Library
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-3xl">😂</div>
                <div>
                  <h4 className="font-bold">Memes & Slang</h4>
                  <p className="text-sm text-muted-foreground">Understand internet culture</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground mb-4">
                <div>• Popular Russian memes explained</div>
                <div>• Modern slang and expressions</div>
                <div>• Internet culture & trends</div>
                <div>• Gen Z Russian language</div>
              </div>
              <Button variant="outline" className="w-full">
                Learn Memes & Slang
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Level Recommendations */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
          <h4 className="font-bold mb-3">📺 Recommended Viewing by Level:</h4>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <Badge className="bg-green-600 text-white mb-2">A2-B1</Badge>
              <div className="text-muted-foreground">Start with simple cartoons and children's shows with clear speech</div>
            </div>
            <div>
              <Badge className="bg-blue-600 text-white mb-2">B1-B2</Badge>
              <div className="text-muted-foreground">Move to classic Soviet comedies with cultural context provided</div>
            </div>
            <div>
              <Badge className="bg-purple-600 text-white mb-2">B2+</Badge>
              <div className="text-muted-foreground">Watch modern films and series to understand contemporary language</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
