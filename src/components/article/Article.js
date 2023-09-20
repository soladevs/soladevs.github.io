import React from 'react';
import ArticleHeading from './components/article/ArticleHeading';
import ArticleSubheading from './components/article/ArticleSubheading';
import ArticleDate from './components/article/ArticleDate';
import ArticleAuthor from './components/article/ArticleAuthor';
import ArticleHeaderImage from './components/article/ArticleHeaderImage';
import ArticleBody from './components/article/ArticleBody';
import ArticleParagraph from './components/article/ArticleParagraph';
import ArticleImage from './components/article/ArticleImage';

const Article = () => {
  return (
    <div>
      <ArticleHeading title="Article Title" />
      <ArticleSubheading text="Article Subheading" />
      <ArticleDate date="June 10, 2023" />
      <ArticleAuthor author="John Doe" />
      <ArticleHeaderImage imageSrc="header-image.jpg" altText="Header Image" />

      <ArticleBody>
        <ArticleParagraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis hendrerit turpis, ac laoreet urna consequat at. Nullam euismod elit non lacus lacinia hendrerit. Suspendisse id est ut ex finibus pharetra nec sit amet turpis." />

        <ArticleImage
          imageSrc="full-width-image.jpg"
          altText="Full Width Image"
          caption="This is a caption for the full-width image."
          fullWidth
        />

        <ArticleParagraph text="Sed pellentesque mattis quam, in malesuada nibh dapibus at. Nam tempus arcu non nunc lacinia, et venenatis urna varius. Vivamus condimentum, nisl eu elementum fermentum, erat orci interdum nunc, vitae convallis mi ante eget tortor." />

        <ArticleImage
          imageSrc="left-image.jpg"
          altText="Left Image"
          caption="This is a caption for the left image."
          align="left"
        />

        <ArticleParagraph text="Aenean auctor ac leo vitae cursus. Mauris eu nunc luctus, pharetra purus non, euismod risus. Sed interdum semper ex vitae dapibus. Cras ut magna eget lacus rutrum aliquam. Nullam id justo at metus luctus faucibus." />

        <ArticleImage
          imageSrc="right-image.jpg"
          altText="Right Image"
          caption="This is a caption for the right image."
          align="right"
        />

        <ArticleParagraph text="Donec eu tincidunt purus. Sed convallis, felis vitae aliquam aliquam, purus metus consectetur est, non cursus mauris elit in est. Fusce feugiat eleifend ligula, a efficitur velit ultrices non." />

        <ArticleParagraph text="Etiam posuere maximus nulla, eget gravida justo convallis in. Proin varius est vel nisl blandit iaculis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus accumsan metus vel vestibulum lacinia." />
      </ArticleBody>
    </div>
  );
};

export default Article;
