<?php

class __Mustache_0e81a38d49abf724d26cb3c553d56414 extends Mustache_Template
{
    private $lambdaHelper;

    public function renderInternal(Mustache_Context $context, $indent = '')
    {
        $this->lambdaHelper = new Mustache_LambdaHelper($this->mustache, $context);
        $buffer = '';

        $buffer .= $indent . '
';
        $buffer .= $indent . '<style>
';
        $buffer .= $indent . '    div {
';
        $buffer .= $indent . '        --remuicourseimage: url(';
        $value = $this->resolveValue($context->find('remuicourseimage'), $context);
        $buffer .= $value;
        $buffer .= ');
';
        $buffer .= $indent . '    }
';
        $buffer .= $indent . '</style>
';
        $buffer .= $indent . '<li id="section-0" class="section clearfix mb-25 mb-4 m-b-2" role="region" aria-label="';
        $value = $this->resolveValue($context->find('generalsectiontitle'), $context);
        $buffer .= $value;
        $buffer .= '">
';
        $buffer .= $indent . '    <div class="general-section">
';
        $buffer .= $indent . '        <div class="px-15 py-10 px-3 py-2 p-x-1 p-y-1 course-cover-image" style="background-image: linear-gradient(to right, rgba(14, 35, 53, 0.68), rgba(14, 35, 53, 0.68)), url(';
        $value = $this->resolveValue($context->find('remuicourseimage'), $context);
        $buffer .= $value;
        $buffer .= ');">
';
        $buffer .= $indent . '            <div class="text-white">
';
        $buffer .= $indent . '                <div class="font-size-24 mb-15 mb-3 wdm-generalsectiontitle">';
        $value = $this->resolveValue($context->find('generalsectiontitle'), $context);
        $buffer .= $value;
        $buffer .= '</div>
';
        $buffer .= $indent . '                <div class="font-size-14 summary">';
        $value = $this->resolveValue($context->find('generalsectionsummary'), $context);
        $buffer .= $value;
        $buffer .= '</div>
';
        $buffer .= $indent . '            </div>
';
        $buffer .= $indent . '
';
        $buffer .= $indent . '            <div class="text-white mb-10 m-b-1 d-flex" style="justify-content: flex-end;">
';
        // 'teachers' section
        $value = $context->find('teachers');
        $buffer .= $this->section333f69b68376ad6a0a5d527ef95029c6($context, $indent, $value);
        $buffer .= $indent . '            </div>
';
        // 'percentage' section
        $value = $context->find('percentage');
        $buffer .= $this->section52c3c4dafddfed472fd728486e45143d($context, $indent, $value);
        $buffer .= $indent . '        </div>
';
        $buffer .= $indent . '
';
        $buffer .= $indent . '        <span class="hidden sectionname">';
        $value = $this->resolveValue($context->find('generalsectiontitle'), $context);
        $buffer .= $value;
        $buffer .= '</span>
';
        $buffer .= $indent . '
';
        $buffer .= $indent . '        <div class="content">
';
        $buffer .= $indent . '            <div class="section_availability badge badge-pill badge-info mb-10"></div>
';
        $buffer .= $indent . '            <ul class="general-section-activities img-text row p-0 py-10 py-2 p-y-1 d-flex justify-content-start text-center">
';
        // 'activities' section
        $value = $context->find('activities');
        $buffer .= $this->section20106f83115b9c8d568c0b98d879db5c($context, $indent, $value);
        $buffer .= $indent . '            </ul>
';
        $buffer .= $indent . '        </div>
';
        $buffer .= $indent . '        <div class="text-center showactivitywrapper">
';
        $buffer .= $indent . '            <span class="showactivity text-primary show">
';
        $buffer .= $indent . '                <i class="fa fa-angle-down" aria-hidden="true"></i>
';
        $buffer .= $indent . '            </span>
';
        $buffer .= $indent . '        </div>
';
        $buffer .= $indent . '    </div>
';
        $buffer .= $indent . '</li>
';

        return $buffer;
    }

    private function section333f69b68376ad6a0a5d527ef95029c6(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
                    {{{teacherimg}}}
                ';
            $result = call_user_func($value, $source, $this->lambdaHelper);
            if (strpos($result, '{{') === false) {
                $buffer .= $result;
            } else {
                $buffer .= $this->mustache
                    ->loadLambda((string) $result)
                    ->renderInternal($context);
            }
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= $indent . '                    ';
                $value = $this->resolveValue($context->find('teacherimg'), $context);
                $buffer .= $value;
                $buffer .= '
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section52c3c4dafddfed472fd728486e45143d(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
                <div class="progress progress-square mb-0">
                    <div class="progress-bar bg-green-600" style="width: {{{percentage}}}%; height: 100%;" role="progressbar">
                        <span class="sr-only">{{{percentage}}}% Complete</span>
                    </div>
                </div>
            ';
            $result = call_user_func($value, $source, $this->lambdaHelper);
            if (strpos($result, '{{') === false) {
                $buffer .= $result;
            } else {
                $buffer .= $this->mustache
                    ->loadLambda((string) $result)
                    ->renderInternal($context);
            }
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= $indent . '                <div class="progress progress-square mb-0">
';
                $buffer .= $indent . '                    <div class="progress-bar bg-green-600" style="width: ';
                $value = $this->resolveValue($context->find('percentage'), $context);
                $buffer .= $value;
                $buffer .= '%; height: 100%;" role="progressbar">
';
                $buffer .= $indent . '                        <span class="sr-only">';
                $value = $this->resolveValue($context->find('percentage'), $context);
                $buffer .= $value;
                $buffer .= '% Complete</span>
';
                $buffer .= $indent . '                    </div>
';
                $buffer .= $indent . '                </div>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function sectionB112a79f48b18372a6acdf0e308ac48f(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
                                {{{leftside}}}
                            ';
            $result = call_user_func($value, $source, $this->lambdaHelper);
            if (strpos($result, '{{') === false) {
                $buffer .= $result;
            } else {
                $buffer .= $this->mustache
                    ->loadLambda((string) $result)
                    ->renderInternal($context);
            }
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= $indent . '                                ';
                $value = $this->resolveValue($context->find('leftside'), $context);
                $buffer .= $value;
                $buffer .= '
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section20106f83115b9c8d568c0b98d879db5c(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
                    <li class="activity {{{modulename}}} modtype_{{{modulename}}} justify-content-center p-0 pt-10 pt-3" id="module-{{id}}">
                        <div>
                            {{#editing}}
                                {{{leftside}}}
                            {{/editing}}
                            <div>
                                <div class="activityinstance p-0 d-inline-block">
                                    {{{title}}}
                                </div>
                                <div class="actions">
                                    {{{completion}}}
                                </div>
                                {{{availstatus}}}
                            </div>
                        </div>
                    </li>
                ';
            $result = call_user_func($value, $source, $this->lambdaHelper);
            if (strpos($result, '{{') === false) {
                $buffer .= $result;
            } else {
                $buffer .= $this->mustache
                    ->loadLambda((string) $result)
                    ->renderInternal($context);
            }
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= $indent . '                    <li class="activity ';
                $value = $this->resolveValue($context->find('modulename'), $context);
                $buffer .= $value;
                $buffer .= ' modtype_';
                $value = $this->resolveValue($context->find('modulename'), $context);
                $buffer .= $value;
                $buffer .= ' justify-content-center p-0 pt-10 pt-3" id="module-';
                $value = $this->resolveValue($context->find('id'), $context);
                $buffer .= call_user_func($this->mustache->getEscape(), $value);
                $buffer .= '">
';
                $buffer .= $indent . '                        <div>
';
                // 'editing' section
                $value = $context->find('editing');
                $buffer .= $this->sectionB112a79f48b18372a6acdf0e308ac48f($context, $indent, $value);
                $buffer .= $indent . '                            <div>
';
                $buffer .= $indent . '                                <div class="activityinstance p-0 d-inline-block">
';
                $buffer .= $indent . '                                    ';
                $value = $this->resolveValue($context->find('title'), $context);
                $buffer .= $value;
                $buffer .= '
';
                $buffer .= $indent . '                                </div>
';
                $buffer .= $indent . '                                <div class="actions">
';
                $buffer .= $indent . '                                    ';
                $value = $this->resolveValue($context->find('completion'), $context);
                $buffer .= $value;
                $buffer .= '
';
                $buffer .= $indent . '                                </div>
';
                $buffer .= $indent . '                                ';
                $value = $this->resolveValue($context->find('availstatus'), $context);
                $buffer .= $value;
                $buffer .= '
';
                $buffer .= $indent . '                            </div>
';
                $buffer .= $indent . '                        </div>
';
                $buffer .= $indent . '                    </li>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

}
