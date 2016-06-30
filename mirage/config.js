export default function() {
  this.get('/rentals', function(db, request) {
    let rentals = [{
        type: 'rentals',
        id: 1,
        attributes: {
          name: 'Madison Public House',
          day: 'Monday',
          food: '$7 Wing Baskets',
          drinks: '$5 Jumbo Mugs & $3 shots, $4 Vodka Lemonade',
          location: '2200 N Milwaukee Ave, Chicago, IL 60647',
          neighborhood: 'Logan Square',
          url: 'https://www.facebook.com/Mphchicago', 
          image: 'https://cdn0.vox-cdn.com/thumbor/TRhC-X_yZw9Y-iJKRZD5Zpmx0Oo=/70x0:639x427/800x600/filters:format(webp)/cdn0.vox-cdn.com/uploads/chorus_image/image/45834890/14357721231_cd33863d8f_z.0.0.jpg'
        }
      }, {
        type: 'rentals',
        id: 2,
        attributes: {
          name: 'Madison Public House',
          day: 'Tuesday',
          food: '2 Tacos $5',
          drinks: '$4 Dos XX Tallboys, $6 Milagro Margaritas',
          location: '2200 N Milwaukee Ave, Chicago, IL 60647',
          neighborhood: 'Logan Square',
          url: 'https://www.facebook.com/Mphchicago', 
          image: 'https://cdn0.vox-cdn.com/thumbor/TRhC-X_yZw9Y-iJKRZD5Zpmx0Oo=/70x0:639x427/800x600/filters:format(webp)/cdn0.vox-cdn.com/uploads/chorus_image/image/45834890/14357721231_cd33863d8f_z.0.0.jpg'
        }
      }, {
        type: 'rentals',
        id: 3,
        attributes: {
          name: 'Madison Public House',
          day: 'Wednesday',
          food: '$7 Boneless Wing Baskets',
          drinks: '$6 Old Style & Malort',
          location: '2200 N Milwaukee Ave, Chicago, IL 60647',
          neighborhood: 'Logan Square',
          url: 'https://www.facebook.com/Mphchicago', 
          image: 'https://cdn0.vox-cdn.com/thumbor/TRhC-X_yZw9Y-iJKRZD5Zpmx0Oo=/70x0:639x427/800x600/filters:format(webp)/cdn0.vox-cdn.com/uploads/chorus_image/image/45834890/14357721231_cd33863d8f_z.0.0.jpg'
        }
      }, {
        type: 'rentals',
        id: 4,
        attributes: {
          name: 'Madison Public House',
          day: 'Thursday',
          food: '1/2 Price Pizza',
          drinks: '$1.5 Hamms Drafts, $4 Blue Moon Drafts',
          location: '2200 N Milwaukee Ave, Chicago, IL 60647',
          neighborhood: 'Logan Square',
          url: 'https://www.facebook.com/Mphchicago', 
          image: 'https://cdn0.vox-cdn.com/thumbor/TRhC-X_yZw9Y-iJKRZD5Zpmx0Oo=/70x0:639x427/800x600/filters:format(webp)/cdn0.vox-cdn.com/uploads/chorus_image/image/45834890/14357721231_cd33863d8f_z.0.0.jpg'
        }
      }, {
        type: 'rentals',
        id: 5,
        attributes: {
          name: 'Madison Public House',
          day: 'Friday',
          food: '$7 Fish Taco Baskets',
          drinks: '$4 Red Stripe, $7 Jim Beam Old Fashion',
          location: '2200 N Milwaukee Ave, Chicago, IL 60647',
          neighborhood: 'Logan Square',
          url: 'https://www.facebook.com/Mphchicago',          
          image: 'https://cdn0.vox-cdn.com/thumbor/TRhC-X_yZw9Y-iJKRZD5Zpmx0Oo=/70x0:639x427/800x600/filters:format(webp)/cdn0.vox-cdn.com/uploads/chorus_image/image/45834890/14357721231_cd33863d8f_z.0.0.jpg'
        }
      }, {
        type: 'rentals',
        id: 6,
        attributes: {
          name: 'Madison Public House',
          day: 'Saturday',
          food: '$11 Dozen Wings',
          drinks: '$4 Brewery of the Month, $22 Milagro Margarita Pitchers',
          location: '2200 N Milwaukee Ave, Chicago, IL 60647',
          neighborhood: 'Logan Square',
          url: 'https://www.facebook.com/Mphchicago', 
          image: 'https://cdn0.vox-cdn.com/thumbor/TRhC-X_yZw9Y-iJKRZD5Zpmx0Oo=/70x0:639x427/800x600/filters:format(webp)/cdn0.vox-cdn.com/uploads/chorus_image/image/45834890/14357721231_cd33863d8f_z.0.0.jpg'
        }
      }, {
        type: 'rentals',
        id: 7,
        attributes: {
          name: 'Madison Public House',
          day: 'Sunday',
          food: '$7 Pub Baskets',
          drinks: '$3 Lite Tallboys, $6 Bloody Marys',
          location: '2200 N Milwaukee Ave, Chicago, IL 60647',
          neighborhood: 'Logan Square',
          url: 'https://www.facebook.com/Mphchicago', 
          image: 'https://cdn0.vox-cdn.com/thumbor/TRhC-X_yZw9Y-iJKRZD5Zpmx0Oo=/70x0:639x427/800x600/filters:format(webp)/cdn0.vox-cdn.com/uploads/chorus_image/image/45834890/14357721231_cd33863d8f_z.0.0.jpg'
        }
      }, {
        type: 'rentals',
        id: 8,
        attributes: {
          name: 'Jack and Gingers',
          day: 'Sunday',
          food: '$6 Nachos or Quesadillas',
          drinks: '$4 Mimosa, $4 Bloody Marys',
          location: '2048 W. Armitage Ave, Chicago, IL 60647',
          neighborhood: 'Bucktown',
          url: 'http://www.jackandgingers.com', 
          image: 'http://www.chicagonow.com/trivia-pursuit/files/2012/10/JG1AM.jpeg'
        }
      }, {
        type: 'rentals',
        id: 9,
        attributes: {
          name: 'Jack and Ginger',
          day: 'Monday',
          food: '$0.35 Wings, $3 Cheese Fries',
          drinks: '$4 Shots, $10 Domestic Pitchers',
          location: '2048 W. Armitage Ave, Chicago, IL 60647',
          neighborhood: 'Bucktown',
          url: 'http://www.jackandgingers.com', 
          image: 'http://www.chicagonow.com/trivia-pursuit/files/2012/10/JG1AM.jpeg'
        }
      }, {
        type: 'rentals',
        id: 10,
        attributes: {
          name: 'Jack and Ginger',
          day: 'Tuesday',
          food: '$1.50 Beef, Chicken or Fish Tacos',
          drinks: '$4 Flavor Vodka, -$1 ALL Drafts',
          location: '2048 W. Armitage Ave, Chicago, IL 60647',
          neighborhood: 'Bucktown',
          url: 'http://www.jackandgingers.com', 
          image: 'http://www.chicagonow.com/trivia-pursuit/files/2012/10/JG1AM.jpeg'
        }
      }, {
        type: 'rentals',
        id: 11,
        attributes: {
          name: 'Jack and Ginger',
          day: 'Wednesday',
          food: '$5 Burgers and Salads',
          drinks: '$3 Goose Island Beers, $3 "J" Shots (Jack, Jamo, Jose Cuervo, Jim Beam & Jager)',
          location: '2048 W. Armitage Ave, Chicago, IL 60647',
          neighborhood: 'Bucktown',
          url: 'http://www.jackandgingers.com', 
          image: 'http://www.chicagonow.com/trivia-pursuit/files/2012/10/JG1AM.jpeg'
        }
      }, {
        type: 'rentals',
        id: 12,
        attributes: {
          name: 'Jack and Ginger',
          day: 'Thursday',
          food: '$6 Homemade 14" Pizza',
          drinks: '$5 Bombs, $13 Domestic Buckets',
          location: '2048 W. Armitage Ave, Chicago, IL 60647',
          neighborhood: 'Bucktown',
          url: 'http://www.jackandgingers.com', 
          image: 'http://www.chicagonow.com/trivia-pursuit/files/2012/10/JG1AM.jpeg'
        }
      }, {
        type: 'rentals',
        id: 13,
        attributes: {
          name: 'Jack and Ginger',
          day: 'Friday',
          food: '$6 Fish & Chips',
          drinks: '$4 Well Drinks, -$2 Bulleit Whiskys',
          location: '2048 W. Armitage Ave, Chicago, IL 60647',
          neighborhood: 'Bucktown',
          url: 'http://www.jackandgingers.com', 
          image: 'http://www.chicagonow.com/trivia-pursuit/files/2012/10/JG1AM.jpeg'
        }
      }, {
        type: 'rentals',
        id: 14,
        attributes: {
          name: 'Jack and Ginger',
          day: 'Saturday',
          food: '$1 Beef & Pulled Pork Sliders',
          drinks: '$2.50 Retro Cans, $4 Bloody Marys, $4 Mimosa',
          location: '2048 W. Armitage Ave, Chicago, IL 60647',
          neighborhood: 'Bucktown',
          url: 'http://www.jackandgingers.com', 
          image: 'http://www.chicagonow.com/trivia-pursuit/files/2012/10/JG1AM.jpeg'
        }
      }, {
        type: 'rentals',
        id: 15,
        attributes: {
          name: 'Logan Bar + Grill',
          day: 'Sunday',
          food: 'None',
          drinks: 'None',
          location: '2230 N California Ave, Chicago, IL 60647',
          neighborhood: 'Logan Square',
          url: 'http://loganchicago.com', 
          image: 'http://1.bp.blogspot.com/_l-vdwoPY6HY/S9L_jbVXLzI/AAAAAAAACeI/oMvv3zc8D0I/s1600/DSC_0450.jpg'
        }
      }, {
        type: 'rentals',
        id: 16,
        attributes: {
          name: 'Logan Bar + Grill',
          day: 'Monday',
          food: '1/2 Price Appetizers 4-7pm',
          drinks: '1/2 Price Bottles of Wine 4-7pm',
          location: '2230 N California Ave, Chicago, IL 60647',
          neighborhood: 'Logan Square',
          url: 'http://loganchicago.com', 
          image: 'http://1.bp.blogspot.com/_l-vdwoPY6HY/S9L_jbVXLzI/AAAAAAAACeI/oMvv3zc8D0I/s1600/DSC_0450.jpg'
        }
      }, {
        type: 'rentals',
        id: 17,
        attributes: {
          name: 'Logan Bar + Grill',
          day: 'Tuesday',
          food: '1/2 Price Appetizers 4-7pm',
          drinks: '$5 Featured Cocktail (all night)',
          location: '2230 N California Ave, Chicago, IL 60647',
          neighborhood: 'Logan Square',
          url: 'http://loganchicago.com', 
          image: 'http://1.bp.blogspot.com/_l-vdwoPY6HY/S9L_jbVXLzI/AAAAAAAACeI/oMvv3zc8D0I/s1600/DSC_0450.jpg'
        }
      }, {
        type: 'rentals',
        id: 18,
        attributes: {
          name: 'Logan Bar + Grill',
          day: 'Wednesday',
          food: '1/2 Price Appetizers 4-7pm',
          drinks: '$7 Domestic Tall Boy with shot of Dewars',
          location: '2230 N California Ave, Chicago, IL 60647',
          neighborhood: 'Logan Square',
          url: 'http://loganchicago.com', 
          image: 'http://1.bp.blogspot.com/_l-vdwoPY6HY/S9L_jbVXLzI/AAAAAAAACeI/oMvv3zc8D0I/s1600/DSC_0450.jpg'
        }
      }, {
        type: 'rentals',
        id: 19,
        attributes: {
          name: 'Logan Bar + Grill',
          day: 'Thursday',
          food: '1/2 Price Appetizers 4-7pm',
          drinks: '$5 Kettle One Mules',
          location: '2230 N California Ave, Chicago, IL 60647',
          neighborhood: 'Logan Square',
          url: 'http://loganchicago.com', 
          image: 'http://1.bp.blogspot.com/_l-vdwoPY6HY/S9L_jbVXLzI/AAAAAAAACeI/oMvv3zc8D0I/s1600/DSC_0450.jpg'
        }
      }, {
        type: 'rentals',
        id: 20,
        attributes: {
          name: 'Logan Bar + Grill',
          day: 'Friday',
          food: '1/2 Price Appetizers 4-7pm',
          drinks: '$5 Jack Daniels',
          location: '2230 N California Ave, Chicago, IL 60647',
          neighborhood: 'Logan Square',
          url: 'http://loganchicago.com', 
          image: 'http://1.bp.blogspot.com/_l-vdwoPY6HY/S9L_jbVXLzI/AAAAAAAACeI/oMvv3zc8D0I/s1600/DSC_0450.jpg'
        }
      }, {
        type: 'rentals',
        id: 21,
        attributes: {
          name: 'Logan Bar + Grill',
          day: 'Saturday',
          food: 'None',
          drinks: 'None',
          location: '2230 N California Ave, Chicago, IL 60647',
          neighborhood: 'Logan Square',
          url: 'http://loganchicago.com', 
          image: 'http://1.bp.blogspot.com/_l-vdwoPY6HY/S9L_jbVXLzI/AAAAAAAACeI/oMvv3zc8D0I/s1600/DSC_0450.jpg'
        }
      }, {
        type: 'rentals',
        id: 22,
        attributes: {
          name: 'Chop Shop',
          day: 'Sunday',
          food: 'None',
          drinks: 'None',
          location: '2033 W. North Ave, Chicago, IL 60647',
          neighborhood: 'Wicker Park',
          url: 'http://www.chopshopchi.com', 
          image: 'http://thekittchen.com/wp-content/uploads/2015/01/IMG_1331.jpg'
        }
      }, {
        type: 'rentals',
        id: 23,
        attributes: {
          name: 'Chop Shop',
          day: 'Monday',
          food: '1/2 Price Appetizers 5-7pm',
          drinks: 'None',
          location: '2033 W. North Ave, Chicago, IL 60647',
          neighborhood: 'Wicker Park',
          url: 'http://www.chopshopchi.com', 
          image: 'http://thekittchen.com/wp-content/uploads/2015/01/IMG_1331.jpg'
        }
      }, {
        type: 'rentals',
        id: 24,
        attributes: {
          name: 'Chop Shop',
          day: 'Tuesday',
          food: 'None',
          drinks: '$4 Drafts 4-7pm',
          location: '2033 W. North Ave, Chicago, IL 60647',
          neighborhood: 'Wicker Park',
          url: 'http://www.chopshopchi.com', 
          image: 'http://thekittchen.com/wp-content/uploads/2015/01/IMG_1331.jpg'
        }
      }, {
        type: 'rentals',
        id: 25,
        attributes: {
          name: 'Chop Shop',
          day: 'Wednesday',
          food: 'None',
          drinks: 'None',
          location: '2033 W. North Ave, Chicago, IL 60647',
          neighborhood: 'Wicker Park',
          url: 'http://www.chopshopchi.com', 
          image: 'http://thekittchen.com/wp-content/uploads/2015/01/IMG_1331.jpg'
        }
      }, {
        type: 'rentals',
        id: 26,
        attributes: {
          name: 'Chop Shop',
          day: 'Thursday',
          food: '$10 Burgers 5-7pm',
          drinks: '$5 John Dalys 5-7pm',
          location: '2033 W. North Ave, Chicago, IL 60647',
          neighborhood: 'Wicker Park',
          url: 'http://www.chopshopchi.com', 
          image: 'http://thekittchen.com/wp-content/uploads/2015/01/IMG_1331.jpg'
        }
      }, {
        type: 'rentals',
        id: 27,
        attributes: {
          name: 'Chop Shop',
          day: 'Friday',
          food: 'None',
          drinks: '$5 Slushies 4-6pm',
          location: '2033 W. North Ave, Chicago, IL 60647',
          neighborhood: 'Wicker Park',
          url: 'http://www.chopshopchi.com', 
          image: 'http://thekittchen.com/wp-content/uploads/2015/01/IMG_1331.jpg'
        }
      }, {
        type: 'rentals',
        id: 28,
        attributes: {
          name: 'Chop Shop',
          day: 'Saturday',
          food: 'None',
          drinks: 'None',
          location: '2033 W. North Ave, Chicago, IL 60647',
          neighborhood: 'Wicker Park',
          url: 'http://www.chopshopchi.com', 
          image: 'http://thekittchen.com/wp-content/uploads/2015/01/IMG_1331.jpg'
        }
      }, {
        type: 'rentals',
        id: 29,
        attributes: {
          name: 'Mr. Browns Lounge',
          day: 'Sunday',
          food: '$.50 Wings until 5pm, $5 Mini Mac & Wings 3-6pm',
          drinks: '1/2 Price Rum Punch 3-6pm',
          location: '2301 W Chicago Ave, Chicago, IL 60622',
          neighborhood: 'Ukrainian Village',
          url: 'http://www.mrbrownslounge.com', 
          image: 'http://onthegrid1.imgix.net/MrBrownsLounge-1.jpg'
        }
      }, {
        type: 'rentals',
        id: 30,
        attributes: {
          name: 'Mr. Browns Lounge',
          day: 'Monday',
          food: '$5 Mini Mac & Wings 3-6pm',
          drinks: '1/2 Price Rum Punch 3-6pm',
          location: '2301 W Chicago Ave, Chicago, IL 60622',
          neighborhood: 'Ukrainian Village',
          url: 'http://www.mrbrownslounge.com', 
          image: 'http://onthegrid1.imgix.net/MrBrownsLounge-1.jpg'
        }
      }, {
        type: 'rentals',
        id: 31,
        attributes: {
          name: 'Mr. Browns Lounge',
          day: 'Tuesday',
          food: '$5 Mini Mac & Wings 3-6pm, $9 Jerk Chicken Entree',
          drinks: '1/2 Price Rum Punch 3-6pm',
          location: '2301 W Chicago Ave, Chicago, IL 60622',
          neighborhood: 'Ukrainian Village',
          url: 'http://www.mrbrownslounge.com', 
          image: 'http://onthegrid1.imgix.net/MrBrownsLounge-1.jpg'
        }
      }, {
        type: 'rentals',
        id: 32,
        attributes: {
          name: 'Mr. Browns Lounge',
          day: 'Wednesday',
          food: '$5 Mini Mac & Wings 3-6pm, $11 Burger & Fries + Heineken',
          drinks: '1/2 Price Rum Punch 3-6pm',
          location: '2301 W Chicago Ave, Chicago, IL 60622',
          neighborhood: 'Ukrainian Village',
          url: 'http://www.mrbrownslounge.com', 
          image: 'http://onthegrid1.imgix.net/MrBrownsLounge-1.jpg'
        }
      }, {
        type: 'rentals',
        id: 33,
        attributes: {
          name: 'Mr. Browns Lounge',
          day: 'Thursday',
          food: '$5 Mini Mac & Wings 3-6pm, $12 Grilled Jerk Chicken Wings + Red Stripe',
          drinks: '$4 Red Stripe, 1/2 Price Rum Punch 3-6pm',
          location: '2301 W Chicago Ave, Chicago, IL 60622',
          neighborhood: 'Ukrainian Village',
          url: 'http://www.mrbrownslounge.com', 
          image: 'http://onthegrid1.imgix.net/MrBrownsLounge-1.jpg'
        }
      }, {
        type: 'rentals',
        id: 34,
        attributes: {
          name: 'Mr. Browns Lounge',
          day: 'Friday',
          food: '$5 Mini Mac & Wings 3-6pm',
          drinks: '1/2 Price Rum Punch 3-6pm',
          location: '2301 W Chicago Ave, Chicago, IL 60622',
          neighborhood: 'Ukrainian Village',
          url: 'http://www.mrbrownslounge.com', 
          image: 'http://onthegrid1.imgix.net/MrBrownsLounge-1.jpg'
        }
      }, {
        type: 'rentals',
        id: 35,
        attributes: {
          name: 'Mr. Browns Lounge',
          day: 'Saturday',
          food: '$5 Mini Mac & Wings 3-6pm',
          drinks: '1/2 Price Rum Punch 3-6pm',
          location: '2301 W Chicago Ave, Chicago, IL 60622',
          neighborhood: 'Ukrainian Village',
          url: 'http://www.mrbrownslounge.com', 
          image: 'http://onthegrid1.imgix.net/MrBrownsLounge-1.jpg'
        }
      }, {
        type: 'rentals',
        id: 36,
        attributes: {
          name: 'Mr. Browns Lounge',
          day: 'Sunday',
          food: '$.50 Wings until 5pm, $5 Mini Mac & Wings 3-6pm',
          drinks: '1/2 Price Rum Punch 3-6pm',
          location: '81 E. Wacker Place, Chicago, IL 60601',
          neighborhood: 'The Loop',
          url: 'http://www.mrbrownslounge.com', 
          image: 'http://www.hardrockhotelchicago.com/files/1715/mbl_pic.jpg'
        }
      }, {
        type: 'rentals',
        id: 37,
        attributes: {
          name: 'Mr. Browns Lounge',
          day: 'Monday',
          food: '$5 Mini Mac & Wings 3-6pm',
          drinks: '1/2 Price Rum Punch 3-6pm',
          location: '81 E. Wacker Place, Chicago, IL 60601',
          neighborhood: 'The Loop',
          url: 'http://www.mrbrownslounge.com', 
          image: 'http://www.hardrockhotelchicago.com/files/1715/mbl_pic.jpg'
        }
      }, {
        type: 'rentals',
        id: 38,
        attributes: {
          name: 'Mr. Browns Lounge',
          day: 'Tuesday',
          food: '$5 Mini Mac & Wings 3-6pm, $9 Jerk Chicken Entree',
          drinks: '1/2 Price Rum Punch 3-6pm',
          location: '81 E. Wacker Place, Chicago, IL 60601',
          neighborhood: 'The Loop',
          url: 'http://www.mrbrownslounge.com', 
          image: 'http://www.hardrockhotelchicago.com/files/1715/mbl_pic.jpg'
        }
      }, {
        type: 'rentals',
        id: 39,
        attributes: {
          name: 'Mr. Browns Lounge',
          day: 'Wednesday',
          food: '$5 Mini Mac & Wings 3-6pm, $11 Burger & Fries + Heineken',
          drinks: '1/2 Price Rum Punch 3-6pm',
          location: '81 E. Wacker Place, Chicago, IL 60601',
          neighborhood: 'The Loop',
          url: 'http://www.mrbrownslounge.com', 
          image: 'http://www.hardrockhotelchicago.com/files/1715/mbl_pic.jpg'
        }
      }, {
        type: 'rentals',
        id: 40,
        attributes: {
          name: 'Mr. Browns Lounge',
          day: 'Thursday',
          food: '$5 Mini Mac & Wings 3-6pm, $12 Grilled Jerk Chicken Wings + Red Stripe',
          drinks: '$4 Red Stripe, 1/2 Price Rum Punch 3-6pm',
          location: '81 E. Wacker Place, Chicago, IL 60601',
          neighborhood: 'The Loop',
          url: 'http://www.mrbrownslounge.com', 
          image: 'http://www.hardrockhotelchicago.com/files/1715/mbl_pic.jpg'
        }
      }, {
        type: 'rentals',
        id: 41,
        attributes: {
          name: 'Mr. Browns Lounge',
          day: 'Friday',
          food: '$5 Mini Mac & Wings 3-6pm',
          drinks: '1/2 Price Rum Punch 3-6pm',
          location: '81 E. Wacker Place, Chicago, IL 60601',
          neighborhood: 'The Loop',
          url: 'http://www.mrbrownslounge.com', 
          image: 'http://www.hardrockhotelchicago.com/files/1715/mbl_pic.jpg'
        }
      }, {
        type: 'rentals',
        id: 42,
        attributes: {
          name: 'Mr. Browns Lounge',
          day: 'Saturday',
          food: '$5 Mini Mac & Wings 3-6pm',
          drinks: '1/2 Price Rum Punch 3-6pm',
          location: '81 E. Wacker Place, Chicago, IL 60601',
          neighborhood: 'The Loop',
          url: 'http://www.mrbrownslounge.com', 
          image: 'http://www.hardrockhotelchicago.com/files/1715/mbl_pic.jpg'



        }
}, 

];

    if(request.queryParams.city !== undefined) {
      let filteredRentals = rentals.filter(function(i) {
        return i.attributes.city.toLowerCase().indexOf(request.queryParams.city.toLowerCase()) !== -1;
      });
      return { data: filteredRentals };
    } else {
      return { data: rentals };
    }
  });
}