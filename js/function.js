// function to generate tags 
const generateTags = (tags) => 
{
  return tags.map(tag => `<button class="category-button mr-1">#${tag}</button>`).join('')
}
