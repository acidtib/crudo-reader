# Article Extractor API

This is a simple API that extracts metadata from webpages using the [Article Extractor](https://www.npmjs.com/package/@extractus/article-extractor) library. The API is built using the [Hono](https://deno.land/x/hono) framework.

## Installation

To install, clone this repository using the following command:

```
git clone https://github.com/acidtib/crudo-reader.git
cd crudo-reader
```

## Usage
Start the local intance.
```
deno task run
```

The API is accessible at `http://localhost:8000/`. The only required parameter is `url`.

### Example request:

Endpoint: GET `http://localhost:8000/?url=article_url`

cURL:
```
curl --request GET \
  --url 'http://localhost:8000/?url=https%3A%2F%2Fworld.hey.com%2Fdhh%2Fopen-source-is-neither-a-community-nor-a-democracy-606abdab'
```

JavaScript:
```
fetch('http://localhost:8000/?url=https%3A%2F%2Fworld.hey.com%2Fdhh%2Fopen-source-is-neither-a-community-nor-a-democracy-606abdab', {method: 'GET'})
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
```

Response:

```
{
  "url": "https://world.hey.com/dhh/open-source-is-neither-a-community-nor-a-democracy-606abdab",
  "title": "Open source is neither a community nor a democracy",
  "image": "https://world.hey.com/dhh/avatar-fb368b1ee9b185dc2a09b03eabdb61678dd55244",
  "content": "<section>\n    <article>\n      <div>\n  <div><p>Using open source software does not entitle you to a vote on the direction of the project. The gift you've received is the software itself and the freedom of use granted by the license. That's it, and this ought to be straight forward, but I repeatedly see that it is not (no matter <a target=\"_blank\" href=\"https://gist.github.com/richhickey/1563cddea1002958f96e7ba9519972d9\">how often it is repeated</a>). And I think the problem stems from the word \"community\", which implies a democratic decision-making process that never actually existed in the open source world.</p></div><p>First of all, community implies that we're all participating on some degree of equal footing in the work required to further the welfare of the group. But that's not how the majority of open source projects are run. They're usually run by a small group of core contributors who take on the responsibility to advance the project, review patches, and guard the integrity of the vision. The division of labor isn't even close to be egalitarian. It's almost always distinctly elitist.</p><div><p>That's good! Yes, elitism is good, when it comes to open source. You absolutely want projects to be driven by the people who show up to do the work, demonstrate their superior dedication and competence, and are thus responsible for keeping the gift factory churning out new updates, features, and releases. Productive effort is the correct moral basis of power in these projects.</p></div><div><p>But this elitism is also the root of entitlement tension. What makes you think you're better than Me/Us/The Community in setting the direction for this project?? Wouldn't it be more <em>fair</em>, if we ran this on democratic consensus?? And it's hard to answer these question in a polite way that doesn't aggravate the tension or offend liberal sensibilities (in the broad historic sense of that word -- not present political alignments).</p></div><p>So we usually skirt around the truth. That not all participants in an open source project contribute equally in neither volume nor value, and this discrepancy is the basis of the hierarchical nature of most projects. It is not, and never will be, one user, one vote. That is, it will never be democratic. And this is good!</p><div><p>The democratic ideals are fulfilled by the fact that open source is free and full of alternatives. Don't like how they're running a given project? Use one of the usual countless alternatives. Or start your own! Here, you can even use the work of a million projects that came before you as a base for doing new work.</p></div><div><p>But the reason this doesn't resolve the tension is that it still relies on showing up and doing the work. And there just so happens to be far fewer individuals willing and capable of doing that than there are individuals who wish they had a say on the direction of their favorite software.</p></div><div><p>You can't solve that tension, only acknowledge it. I've dealt with it for literally twenty years with my work on Rails and a million other open source projects. There's an ever-latent instinct in a substantial subset of open source users who will continuously rear itself to question why it's the people who do the most work or deliver the most value or start the most projects that get to have the largest say.</p></div><div><p>And when people talk about open source burnout, it's often related to this entitlement syndrome. Although it's frequently misdiagnosed as a problem of compensation. As if begging for a few dollars would somehow make the entitlement problem bearable. I don't think it would. Programmers frequently turn to the joy of open source exactly because it exists outside <a target=\"_blank\" href=\"https://world.hey.com/dhh/i-won-t-let-you-pay-me-for-my-open-source-d7cf4568\">the normal employment dynamics of quid-pro-quo</a>. That's the relief.</p></div><div><p>I frequently argue that open source is best seen as <a target=\"_blank\" href=\"https://world.hey.com/dhh/the-open-source-gift-exchange-2171e0f0\">a gift exchange</a>, since that puts the emphasis on how to react as receiver of gifts. But if you're going to use another word as an alternative to community, I suggest you look at \"ecosystem\". Ecosystems aren't egalitarian. There are big fish and little fish. Sometimes the relationships are symbiotic, but they're also potentially parasitic.</p></div><p>But whatever word you choose, you'd do well to remember that open source is first and foremost a method of collaboration between programmers who show up to do the work. Not an entitlement program for petulant users to get free stuff or a seat at the table where decisions are made.</p>\n</div>\n    </article>\n  </section>",
  "ttr": 143,
  "type": "article",
  "links": [
    "https://world.hey.com/dhh/open-source-is-neither-a-community-nor-a-democracy-606abdab"
  ]
}
```