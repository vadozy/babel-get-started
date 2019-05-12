const posts = {};

posts[Symbol.iterator] = function() {
    const URL = "https://jsonplaceholder.typicode.com/posts"
    return {
        next: async function() {

            const rand = Math.random();
            if (rand > 0.7) {
                return {
                    value: undefined,
                    done: true
                };
            }

            const request = new Request(URL + `r=${rand}`, {
                method: 'GET',
                mode: 'cors'
            });

            const response = await fetch(request);
            const data = await response.json();
            console.log('array of posts fetched', data);
            return {
                value: data,
                done: false
            }

        }
    }
}