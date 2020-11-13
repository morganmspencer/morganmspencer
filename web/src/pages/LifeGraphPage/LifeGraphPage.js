import { Link, routes } from '@redwoodjs/router'
import ResumeLayout from 'src/layouts/ResumeLayout'

const BranchItem = (props) => {
  return (
    <li
      data-index={props.index}
      data-reference={props.reference}
      data-level={props.level ? props.level : 1}
    >
      <ul>
        <li>
          {props.detailTitle ? (
            <details>
              <summary>
                {props.detailTitle}
                {props.detailSubTitle && (
                  <span className="text-base text-light">
                    {props.detailSubTitle}
                  </span>
                )}
              </summary>
              <div>{props.children}</div>
            </details>
          ) : (
            props.children
          )}
        </li>
      </ul>
    </li>
  )
}

const LifeGraphPage = () => {
  return (
    <ResumeLayout>
      <div id="life-graph">
        <ul className="graph-data">
          <li>init Morgan Spencer</li>
          <li>add childhood</li>
          <li>add kindergarten through high school</li>
          <li>2011</li>
          <BranchItem
            index="ed-1"
            reference="start"
            level="4"
            detailTitle="start at Philadelphia University"
            detailSubTitle="B.S. in Animation, minor in Graphic Design"
          ></BranchItem>
          <li>2012</li>
          <BranchItem
            index="ex-1"
            reference="start"
            level="3"
            detailTitle="start at Office of Information Technology"
            detailSubTitle="Help Desk Technician"
          ></BranchItem>
          <li>2013</li>
          <li>2014</li>
          <BranchItem
            index="ex-2"
            reference="start"
            level="2"
            detailTitle="start at SLANT Media"
            detailSubTitle="Graphic Design Intern"
          >
            <p>
              Intern at a creative agency that solves communication problems
              through strategy and intelligent design. Responsibilities included
              assisting designers, meeting with clients, creating assets and
              conducting research. Key traits gained were the ability to work
              with clients, time management, meeting deadlines, the ability to
              brainstorm, creating original designs and the ability to work in
              the design industry.
            </p>
          </BranchItem>
          <BranchItem index="ex-2" reference="end">
            leave SLANT Media
          </BranchItem>
          <BranchItem index="ex-1" reference="mid" level="3">
            promoted to Assistant Manager
          </BranchItem>
          <li>2015</li>
          <BranchItem index="ex-1" reference="end">
            leave Office of Information Technology
          </BranchItem>
          <BranchItem index="ed-1" reference="end">
            graduate from Philadelphia University
          </BranchItem>
          <BranchItem
            index="ex-3"
            reference="start"
            level="2"
            detailTitle="start at Sylogent"
          ></BranchItem>
          <li>2016</li>
          <BranchItem index="ex-3" reference="end">
            leave Sylogent
          </BranchItem>
          <BranchItem
            index="ex-4"
            reference="start"
            level="2"
            detailTitle="start at CBC Industries"
          ></BranchItem>
          <li>2017</li>
          <BranchItem
            index="ex-5"
            reference="start"
            level="3"
            detailTitle="found Spencer Creative Co."
          ></BranchItem>
          <BranchItem index="ex-4" reference="end">
            leave CBC Industries
          </BranchItem>
          <li>2018</li>
          <BranchItem
            index="ex-6"
            reference="start"
            level="4"
            detailTitle="start at The Citadel"
            detailSubTitle="Digital Communications Coordinator (Webmaster)"
          ></BranchItem>
          <BranchItem
            index="ed-2"
            reference="start"
            level="2"
            detailTitle="start at The Citadel"
            detailSubTitle="Master of Business Administration"
          ></BranchItem>
          <li>2019</li>
          <li>2020</li>
          <BranchItem index="ed-2" reference="end">
            leave CBC Industries
          </BranchItem>
        </ul>
      </div>
    </ResumeLayout>
  )
}

export default LifeGraphPage
