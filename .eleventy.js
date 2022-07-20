

module.exports = function (eleventyConfig) {
    
    eleventyConfig.addPassthroughCopy("./src/style.css")
    eleventyConfig.addPassthroughCopy("./src/static/")

    eleventyConfig.addPassthroughCopy("./src/admin/")
    
    
    
    return {
      dir: {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        input: './src',
        output: './build'
      }
    }
  }