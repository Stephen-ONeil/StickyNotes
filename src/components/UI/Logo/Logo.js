import React from 'react'
import logoImg from '../../../assets/memo.png'
import classes from './Logo.module.css'

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={logoImg} alt="sticky note"></img>
        {/* RE: providing an alt for am image (or more specifically a logo)
          Good to see you setting an alt! I'm assuming you know why, since you did it, but just so we're on the same page
          before I give some pointers, I'm going to take a second to re-state what they're good for.

          Providing an alt is important for three reasons:
            1) SEO - crawlers will index the content of your alt attributes
            2) as a fallback - if an image fails to load, is loading very slowly, or can't be displayed by the users browser (e.g.
            unsupported format), browsers may display the alt text as a placeholder.
            3) accessibility - assistive tools, such as screen readers, will read the alt text outloud. Otherwise, image content
            can not be accessed by users with various levels of visual impairement

          Bit of a conflict between those three purposes. For 2, you usually only want a couple words at most, it's jarring 
          enough when placeholder text replaces an image and it's usually evern more jarring when that text's long. On the 
          flip-side, you might need a lot of text to stand in for something like a diagram, for the purposes of 3. SEO juicers 
          will just cram search terms in an alt, and that's bad for both 2 and 3.
          
          ~2 and 3 are easily reconciled thanks to the `longdesc` attribute, which exists specifically as a place to put longer
          image descriptions intended for screen reader users.~ EDIT: a) had the usage of longdesc wrong, b) it's been deprecated.
          Guess if you want a longer description that doesn't get displayed when the image fails to load, you could stick it in
          the `title` attribute (although then it becomes hover over text which may also be a headache in some cases).
          
          1 is fine as a passive benefit of alt text, just keep in mind that using alt text specifically for SEO will usually
          hurt users via 2 and 3.
          
          All that said, "sticky note" is not very helpful alt text for any of those three goals. Probably something like
          alt="Memo.io logo", maybe with a ~longdesc~ longer title describing the logo, would be the most comprehensive.


          Addendum on accessibility:
            - it's often shortened to a11y (a{eleven other letters}y), I'll be doing that from now on probably
            - it refers to anything done for the purpose of ensuring that a website is suitably usable for persons with disabilities
            - it's really important, but doesn't get taught very well! As a juniour dev my self, I don't think I heard about it
            for at least a year and a half. Important enough, though, that suitable a11y is legally required on all governemnt
            websites here, and big companies are often sued under anti discrimination laws for failing to meet a11y standards (like
            Dominos in the U.S. last year).
            - ... there's a lot to learn about it, expect it to come up often. I'm going to make a couple more commits with a11y
            specific comments after this one
        */}
        {/* RE: alternate a11y consideration
          Small note, but you can hide content from screen reader users with the attribute `aria-hidden="true"`. It's often more
          suitable to just hide something like a logo altogether, rather than describe it, since it's usually a redundant to some
          actual on-screen text and only there for visual design purposes.
          
          Want to know what "aria" means? Ask me in the PR, but heads up that it's going to be an excuse for me to talk about 
          specifications, web standards, and the groups that write the specifications and standards for the web. On one hand, it's
          worth knowing at least vaguely how things like HTML are standardized and advanced, on the other hand the groups and
          specifications involved all have really long, kind of boring names, haha.
        */}
    </div>
)

export default logo;