angular.module('app', [])

    .controller('mainCtrl', function($scope){

        $scope.cards = [
            {
                name: 'Github',
                title: 'link to Github',
                link: 'https://github.com/tocausan',
                buttonText: 'See more on Github',
                description: 'Open source code.',
                class: 'card-coding'
            },
            {
                name: 'Instagram',
                title: 'link to Instagram',
                link: 'https://instagram.com/tocausan',
                buttonText: 'See more on Instagram',
                description: 'Daily visual porn.',
                class: 'card-photography'
            },
            {
                name: 'Flickr',
                title: 'link to Flickr',
                link: 'https://www.flickr.com/photos/tocausan',
                buttonText: 'See more on Flickr',
                description: 'More visual porn in higher quality.',
                class: 'card-photography-2'
            },
            {
                name: '500px',
                title: 'link to 500px',
                link: 'https://500px.com/tocausan',
                buttonText: 'See more on 500px',
                description: 'Some visual you could buy.',
                class: 'card-photography-3'
            },
            {
                name: 'Behance',
                title: 'link to Behance',
                link: 'https://www.behance.net/tocausan',
                buttonText: 'See more on Behance',
                description: 'Some other creative and visual porn.',
                class: 'card-design'
            },
            {
                name: 'Pinterest',
                title: 'link to Pinterest',
                link: 'https://jp.pinterest.com/tocausan',
                buttonText: 'See more on Pinterest',
                description: 'Visual inspiration flow.',
                class: 'card-inspiration'
            },
            {
                name: 'Soundclouds',
                title: 'link to Soundclouds',
                link: 'https://soundcloud.com/tomas-caufriez-sanchez',
                buttonText: 'See more on Soundclouds',
                description: 'Sound inspiration flow.',
                class: 'card-inspiration-2'
            },
            {
                name: 'Medium',
                title: 'link to Medium',
                link: 'https://medium.com/@tocausan',
                buttonText: 'See more on Medium',
                description: 'Some stories.',
                class: 'card-blog'
            },
            {
                name: 'Linkedin',
                title: 'link to Linkedin',
                link: 'https://www.linkedin.com/in/tomascaufriez',
                buttonText: 'See more on Linkedin',
                description: 'Link me.',
                class: 'card-social'
            },
            {
                name: 'Facebook',
                title: 'link to Facebook',
                link: 'https://www.facebook.com/coucoucaptain',
                buttonText: 'See more on Facebook',
                description: 'I am there too.',
                class: 'card-social-2'
            },
            {
                name: 'Tweeter',
                title: 'link to Tweeter',
                link: 'https://twitter.com/tocausan',
                buttonText: 'See more on Tweeter',
                description: 'I am there too.',
                class: 'card-social-3'
            },
            {
                name: 'Codepen',
                title: 'link to Codepen',
                link: 'http://codepen.io/tocausan',
                buttonText: 'See more on Codepen',
                description: 'Code tester.',
                class: 'card-coding-2'
            },
            {
                name: 'Gmail',
                title: 'link to Gmail',
                link: 'mailto:tocausan@gmail.com',
                buttonText: 'Send greetings on Gmail',
                description: 'Mail.',
                class: 'card-mail'
            }
        ]
    });
